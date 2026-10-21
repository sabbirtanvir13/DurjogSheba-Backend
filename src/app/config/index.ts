import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    node_env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 5000,
    database_url: process.env.DATABASE_URL,
    bak_url: process.env.APP_URL,
    frontend_url: process.env.FRONTEND_URL,
    bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET || "default_jwt_access_secret",
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET || process.env.REFRESH_TOKEN_SECRET || "default_jwt_refresh_secret",
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || process.env.JWT_EXPIRES_IN || "1d",
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || "7d"
}