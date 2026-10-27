import config from "../config";
import { redisClient } from "./redis";

export const getBkashIdToken = async (): Promise<string> => {
    try {
        const IdTokenKey = "bkash:idToken";
        const RefreshTokenKey = "bkash:refreshToken";

        const cachedIdToken = await redisClient.get(IdTokenKey);
        const cachedIdTokenTTL = await redisClient.ttl(IdTokenKey); 

        const cachedRefreshToken = await redisClient.get(RefreshTokenKey);
        const cachedRefreshTokenTTL = await redisClient.ttl(RefreshTokenKey);

        if (cachedIdToken && cachedIdTokenTTL > 600) {
            return cachedIdToken;
        }

        if (
            (cachedIdTokenTTL <= 600 || !cachedIdToken) && 
            cachedRefreshToken && 
            cachedRefreshTokenTTL > 600
        ) {
            try {
                const refreshTokenResponse = await fetch(`${config.bkash_base_url}/tokenized/checkout/token/refresh`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        username: config.bkash_username,
                        password: config.bkash_password
                    },
                    body: JSON.stringify({
                        app_key: config.bkash_app_key,
                        app_secret: config.bkash_app_secret,
                        refresh_token: cachedRefreshToken
                    })
                });

                if (refreshTokenResponse.ok) {
                    const bkashRefreshTokenResult = await refreshTokenResponse.json();
                    
                    if (bkashRefreshTokenResult && bkashRefreshTokenResult.id_token) {
                        const refreshedIdToken = bkashRefreshTokenResult.id_token as string;

                        await redisClient.set(IdTokenKey, refreshedIdToken, {
                            expiration: {
                                type: "EX",
                                value: 60 * 60
                            }
                        });

                        if (bkashRefreshTokenResult.refresh_token) {
                            await redisClient.set(RefreshTokenKey, bkashRefreshTokenResult.refresh_token as string, {
                                expiration: {
                                    type: "EX",
                                    value: 60 * 60 * 24 * 28 
                                }
                            });
                        }

                        return refreshedIdToken;
                    }
                }
            } catch (refreshError) {
                console.error("bKash token refresh failed, falling back to grant token:", refreshError);
            }
        }

       
        const response = await fetch(`${config.bkash_base_url}/tokenized/checkout/token/grant`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                username: config.bkash_username,
                password: config.bkash_password
            },
            body: JSON.stringify({
                app_key: config.bkash_app_key,
                app_secret: config.bkash_app_secret
            })
        });

        if (!response.ok) {
            throw new Error("Bkash Access Token Grant Failed");
        }

        const result = await response.json();

        if (!result || !result.id_token) {
            throw new Error("Invalid response from bKash grant token API");
        }

        const newIdToken = result.id_token as string;

        await redisClient.set(IdTokenKey, newIdToken, {
            expiration: {
                type: "EX",
                value: 60 * 60 
            }
        });

        if (result.refresh_token) {
            await redisClient.set(RefreshTokenKey, result.refresh_token as string, {
                expiration: {
                    type: "EX",
                    value: 60 * 60 * 24 * 28 
                }
            });
        }

        return newIdToken;

    } catch (error: any) {
        throw new Error(error.message || "Failed to get bKash ID Token");
    }
};