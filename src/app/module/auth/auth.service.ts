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
    IVerifyEmailPayload,
} from "./auth.interface";
import { redisClient } from "../../lib/redis";
import crypto from "crypto";
import { transporter } from "../../lib/nodemailer";
import ejs from "ejs";
import path from "path";
import { Role } from "../../../../generated/prisma/enums";

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

    const otpValue = crypto.randomInt(100000, 1000000).toString();
    const expirationSeconds = 60 * 5; // 5 minutes

   
    const otpkey = `Donor-Register-otp:${email}`;

    await redisClient.set(otpkey, otpValue, {
        EX: expirationSeconds,
    });

    const donorregisterkey = `Donor-Register-data:${email}`;

    const redisUserDataPaylod = {
        name,
        email,
        password: hashedPassword,
        phoneNumber,
    };

    await redisClient.set(donorregisterkey, JSON.stringify(redisUserDataPaylod), {
        EX: expirationSeconds,
    });

    const tempatePath = path.join(process.cwd(), "src/app/templates/registration-user-otp.ejs");

    const templateData = {
        name,
        email,
        otp: otpValue,
        expirationMinutes: expirationSeconds / 60,
    };

    const html = await ejs.renderFile(tempatePath, templateData);

    await transporter.sendMail({
        from: config.smtp_sender,
        to: email,
        subject: "Email Verification",
        html,
    });

    return {
        message: "Verification OTP sent to your email successfully",
    };
};

const verifyDonorEmail = async (payload: IVerifyEmailPayload) => {
    const otp = payload.otp;
    const email = payload.email.trim().toLowerCase();

    const isUserExist = await prisma.user.findUnique({
        where: { email },
    });

    if (isUserExist?.isVerified) {
        throw new Error("Email Already Verified");
    }

   
    const otpKey = `Donor-Register-otp:${email}`;
    const redisOtp = await redisClient.get(otpKey);

    if (!redisOtp) {
        throw new Error("Invalid or Expired OTP");
    }

    if (String(redisOtp).trim() !== String(otp).trim()) {
        throw new Error("OTP Does Not Match");
    }

    await redisClient.del(otpKey);

    const donorregisterkey = `Donor-Register-data:${email}`;
    const redisDonorData = await redisClient.get(donorregisterkey);

    if (!redisDonorData) {
        throw new Error("Donor Data Does Not Exist or Expired");
    }

    const DonorPayload: IRegisterUserPayload = JSON.parse(redisDonorData);


    const [createdUser, donor] = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                name: DonorPayload.name,
                email: DonorPayload.email,
                password: DonorPayload.password,
                phoneNumber: DonorPayload.phoneNumber || "",
                role: Role.DONOR,
                isVerified: true,
            },
            omit: { password: true },
        });

        const createdDonor = await tx.donor.create({
            data: {
                userId: user.id,
                name: DonorPayload.name,
                email: DonorPayload.email,
                phoneNumber: DonorPayload.phoneNumber || "",
            },
        });

        return [user, createdDonor] as const;
    });

    await redisClient.del(donorregisterkey);

    const templatePath = path.join(process.cwd(), "src/app/templates/Donor-welcome-email.ejs"); 

    const templateData = {
        name: createdUser.name,
    };

    try {
        const html = await ejs.renderFile(templatePath, templateData);
        await transporter.sendMail({
            from: config.smtp_sender,
            to: email,
            subject: "Welcome To DurjogSheba System",
            html,
        });
    } catch (err) {
        console.error("Welcome email send failed:", err);
    }

    const jwtPayload = {
        userId: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        role: createdUser.role,
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
        user: createdUser,
        donor,
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

    const otp = crypto.randomInt(100000, 1000000).toString();
    const expirationSeconds = 60 * 5; // 5 minutes
    const key = `forget-password-otp:${isUserExist.email.trim().toLowerCase()}`;

    await redisClient.set(key, otp, {
        EX: expirationSeconds,
    });

    const tempatePath = path.join(process.cwd(), "src/app/templates/forgot-password.ejs");

    const templateData = {
        name: isUserExist.name,
        otp,
        expirationMinutes: expirationSeconds / 60,
    };

    const html = await ejs.renderFile(tempatePath, templateData);

    await transporter.sendMail({
        from: config.smtp_sender,
        to: isUserExist.email,
        subject: "Forget Password",
        html,
    });

    return {
        message: "OTP sent to your email successfully",
    };
};

const ResetPasswrod = async (payload: IResetPasswordPayload) => {
    const { email, otp, newPassword } = payload;
    const normalizedEmail = email.trim().toLowerCase();

    const isUserExist = await prisma.user.findUnique({
        where: { email: normalizedEmail },
    });

    if (!isUserExist) {
        throw new Error("User not found");
    }
    const key = `forget-password-otp:${isUserExist.email}`;

    const redisOtp = await redisClient.get(key);

    if (!redisOtp) {
        throw new Error("Invalid OTP");
    }

    if (redisOtp !== otp) {
        throw new Error("OTP Does Not Match");
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, Number(config.bcrypt_salt_rounds));

    await prisma.user.update({
        where: {
            email: isUserExist.email,
        },
        data: {
            password: hashedNewPassword,
        },
    });

    await redisClient.del([key]);
    const expirationSeconds = 60 * 5;
    const tempatePath = path.join(process.cwd(), "src/app/templates/reset-password-success.ejs");

    const templateData = {
        name: isUserExist.name,
        otp,
        expirationMinutes: expirationSeconds / 60,
    };

    const html = await ejs.renderFile(tempatePath, templateData);

    await transporter.sendMail({
        from: config.smtp_sender,
        to: isUserExist.email,
        subject: "Reset Password",
        html,
    });
};

export const AuthService = {
    registerUser,
    verifyDonorEmail,
    loginUser,
    googleLogin,
    getMe,
    refreshToken,
    ForgetPasswrod,
    ResetPasswrod,
};