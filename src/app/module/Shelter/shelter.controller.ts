import { Request, Response } from "express";
import { ShelterService } from "./shelter.service";

const createShelter = async (req: Request, res: Response) => {
	try {
		const files = req.files as Express.Multer.File[];
		const imageBuffers = files ? files.map((file) => file.buffer) : [];

		const coordinatorId = req.body.coordinatorId || req.user?.userId;
		if (!coordinatorId) {
			return res.status(400).json({
				success: false,
				message: "Coordinator ID is required",
			});
		}

		const payload = {
			...req.body,
			coordinatorId,
		};

		const result = await ShelterService.createShelter(payload, imageBuffers);
		res.status(201).json({
			success: true,
			statusCode: 201,
			message: "Shelter created successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Failed to create shelter",
		});
	}
};

const getAllShelters = async (req: Request, res: Response) => {
	try {
		const filters = {
			searchTerm: req.query.searchTerm as string,
			district: req.query.district as string,
			upazila: req.query.upazila as string,
		};
		const result = await ShelterService.getAllShelters(filters);
		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "Shelters fetched successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Failed to fetch shelters",
		});
	}
};

const getShelterById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id as string;
		const result = await ShelterService.getShelterById(id);
		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "Shelter fetched successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Failed to fetch shelter",
		});
	}
};

const updateShelter = async (req: Request, res: Response) => {
	try {
		const id = req.params.id as string;
		const result = await ShelterService.updateShelter(id, req.body);
		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "Shelter updated successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Failed to update shelter",
		});
	}
};

const uploadShelterImages = async (req: Request, res: Response) => {
	try {
		const id = req.params.id as string;
		const files = req.files as Express.Multer.File[];

		if (!files || files.length === 0) {
			return res
				.status(400)
				.json({ success: false, message: "No image files provided" });
		}

		const buffers = files.map((file) => file.buffer);
		const result = await ShelterService.uploadShelterImages(id, buffers);

		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "Shelter images uploaded successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({ success: false, message: error.message });
	}
};

const deleteShelter = async (req: Request, res: Response) => {
	try {
		const id = req.params.id as string;
		const result = await ShelterService.deleteShelter(id);
		res.status(200).json({
			success: true,
			statusCode: 200,
			message: "Shelter deleted successfully",
			data: result,
		});
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Failed to delete shelter",
		});
	}
};

export const ShelterController = {
	createShelter,
	getAllShelters,
	getShelterById,
	updateShelter,
	uploadShelterImages,
	deleteShelter,
};
