import cookieParser from "cookie-parser";
import cors from "cors";
import express, {
	type Application,
	type NextFunction,
	type Request,
	type Response,
} from "express";
import httpStatus from "http-status";
import config from "./app/config";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import { AuthRoutes } from "./app/module/auth/auth.route";
import z from "zod";
import { redisClient } from "./app/lib/redis";
import crypto from "crypto"
const app: Application = express();

app.use(
	cors({
		origin: config.frontend_url,
		credentials: true,
	}),
);

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", AuthRoutes);




app.get("/test", async (req: Request, res: Response, next : NextFunction) => {

	try {
	     
		// await redisClient.set("forget passwrod otp","121324",{
        //    expiration:{
		// 	type:"EX",
		// 	value:600
		//    }
		// })

		const Otp =crypto.randomInt(100000,1000000)

		res.status(httpStatus.OK).json({
			success: true,
			message: "Welcome to  DhurjogSheba  Backend",
			data : Otp
		});
	} catch (error) {
		console.log(error);
		next(error)
	}
})








// Basic route
app.get("/", async (_req: Request, res: Response) => {
	res.status(httpStatus.OK).json({
		success: true,
		message: "Welcome to DurjogSheba Backend",
	});
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
