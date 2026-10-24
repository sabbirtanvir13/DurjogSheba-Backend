import { Request, Response } from "express";
import { UserServices } from "./user.service";

const uploadProfileImage = async (req: Request, res: Response) => {
	try {
		if (!req.file || !req.file.buffer) {
			return res.status(400).json({
				success: false,
				message: "No image file provided",
			});
		}

		const userId = req.user?.userId;

		if (!userId) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized access",
			});
		}

		const result = await UserServices.uploadProfileImage(
			req.file.buffer,
			userId,
		);

		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "Profile image uploaded successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Failed to upload profile image",
		});
	}
};

export const UserController = {
	uploadProfileImage,
};
