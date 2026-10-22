import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";

const createToken = (
	payload: JwtPayload,
	secret: string,
	expiresIn: SignOptions,
) => {
	const token = jwt.sign(payload, secret, {
		expiresIn,
	} as SignOptions);

	return token;
};

const verifyToken = (token: string, secret: string) => {
	try {
		const verifiedToken = jwt.verify(token, secret);
		return {
			success: true,
			data: verifiedToken,
		};
	} catch (error: unknown) {
		console.log("Token verification failed:", error);
		const errorMessage =
			error instanceof Error ? error.message : "Token verification failed";
		return {
			success: false,
			error: errorMessage,
		};
	}
};

export const jwtUtils = {
	createToken,
	verifyToken,
};
