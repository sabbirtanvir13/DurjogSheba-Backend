import bcrypt from "bcrypt";
import type { JwtPayload, SignOptions } from "jsonwebtoken";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import { jwtUtils } from "../../utils/jwt";
import type {
    IForgotPasswordPayload,
    ILoginUserPayload,
    IRegisterUserPayload,
    IRequestUser,
    IResetPasswordPayload,
} from "./auth.interface";
import { redisClient } from "../../lib/redis";
import crypto from "crypto";

const registerUser = async (payload: IRegisterUserPayload) => {
    const { name, password, phoneNumber } = payload;
    const email = payload.email.trim().toLowerCase();

    const isUserExists = await prisma.user.findUnique({
        where: { email },
    });

    if (isUserExists) {
        throw new Error("User with this email already exists");
    }

    const saltRounds = Number(config.bcrypt_salt_rounds) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            isVerified: false,
        },
        omit: { password: true },
    });

    const user = createdUser;
    const jwtPayload = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_access_secret,
        config.jwt_access_expires_in as SignOptions,
    );

    const refreshToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_refresh_secret,
        config.jwt_refresh_expires_in as SignOptions,
    );

    return {
        user,
        accessToken,
        refreshToken,
    };
};

const loginUser = async (payload: ILoginUserPayload) => {
    const { password } = payload;
    const email = payload.email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        throw new Error("Invalid credentials");
    }

    const jwtPayload = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_access_secret,
        config.jwt_access_expires_in as SignOptions,
    );

    const refreshToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_refresh_secret,
        config.jwt_refresh_expires_in as SignOptions,
    );

    return {
        accessToken,
        refreshToken,
    };
};

const googleLogin = async (payload: { email: string; name: string }) => {
    const email = payload.email.trim().toLowerCase();
    const name = payload.name;

    let user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        const dummyPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(dummyPassword, 10);

        user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phoneNumber: "", 
                isVerified: true, 
            },
        });
    }

    const jwtPayload = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_access_secret,
        config.jwt_access_expires_in as SignOptions,
    );

    const refreshToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_refresh_secret,
        config.jwt_refresh_expires_in as SignOptions,
    );

    return {
        user,
        accessToken,
        refreshToken,
    };
};

const getMe = async (user: IRequestUser) => {
    const isUserExists = await prisma.user.findUnique({
        where: {
            id: user.userId,
        },
        omit: {
            password: true,
        },
    });

    if (!isUserExists) {
        throw new Error("User not found");
    }

    return isUserExists;
};

const refreshToken = async (token: string) => {
    const verifiedRefreshToken = jwtUtils.verifyToken(
        token,
        config.jwt_refresh_secret,
    );

    if (!verifiedRefreshToken.success || !verifiedRefreshToken.data) {
        throw new Error(
            config.node_env === "development"
                ? verifiedRefreshToken.error
                : "Invalid refresh token",
        );
    }

    const data = verifiedRefreshToken.data as JwtPayload;

    const user = await prisma.user.findUnique({
        where: { id: data.userId },
    });

    if (!user) {
        throw new Error("User is inactive or not found");
    }

    const jwtPayload = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_access_secret,
        config.jwt_access_expires_in as SignOptions,
    );

    const newRefreshToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_refresh_secret,
        config.jwt_refresh_expires_in as SignOptions,
    );

    return {
        accessToken,
        refreshToken: newRefreshToken,
    };
};

const ForgetPasswrod = async (payload: IForgotPasswordPayload) => {
    const email = payload.email.trim().toLowerCase();
    const isUserExist = await prisma.user.findUnique({
        where: { email },
    });

    if (!isUserExist) {
        throw new Error("User not found");
    }

    const otp = crypto.randomInt(100000,1000000).toString();
     const key=`forget_passwrod_Otp${isUserExist.email}`
    await redisClient.set(key,otp,{
        expiration:{
            type:"EX",
            value:60*5
        }
    })
};

const ResetPasswrod = async (payload: IResetPasswordPayload) => {
    const { email,otp, newPassword } = payload;
    const normalizedEmail = email.trim().toLowerCase();

    const isUserExist = await prisma.user.findUnique({
        where: { email: normalizedEmail },
    });

    if (!isUserExist) {
        throw new Error("User not found");
    }

    const saltRounds = Number(config.bcrypt_salt_rounds) || 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await prisma.user.update({
        where: { email: normalizedEmail },
        data: {
            password: hashedPassword,
        },
    });

    return {
        message: "Password reset successful",
    };
};

export const AuthService = {
    registerUser,
    loginUser,
    googleLogin,
    getMe,
    refreshToken,
    ForgetPasswrod,
    ResetPasswrod,
};