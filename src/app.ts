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
import crypto from "crypto";
import { UserRoutes } from "./app/module/user/user.route";
import { ShelterRoutes } from "./app/module/Shelter/shelter.routes";
import { ReliefNeedRoutes } from "./app/module/ReliefNeed/reliefNeed.routes";
import { RescueRequestRoutes } from "./app/module/rescueRequest/rescueRequest.routes";
import { AdminRoutes } from "./app/module/admin/admin.route";
import { VolunteerRoutes } from "./app/module/volunteer/volunteer.routes";
import { DonationRoutes } from "./app/module/donation/donation.routes";
import { DonorRoutes } from "./app/module/donor/donor.routes";
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
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/shelters", ShelterRoutes);
app.use("/api/v1/relief-needs", ReliefNeedRoutes);
app.use("/api/v1/rescue-requests", RescueRequestRoutes);
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/volunteers", VolunteerRoutes);
app.use("/api/v1/donations", DonationRoutes);
app.use("/api/v1/donor", DonorRoutes);
app.get("/test", async (req: Request, res: Response, next: NextFunction) => {
	try {

		const Otp = crypto.randomInt(100000, 1000000);

		res.status(httpStatus.OK).json({
			success: true,
			message: "Welcome to  DhurjogSheba  Backend",
			data: Otp,
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
});

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
