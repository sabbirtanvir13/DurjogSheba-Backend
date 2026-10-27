import { Request, Response } from "express";
import { DonorService } from "./donor.service";


const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const userId = user?.userId || user?.id;
    const result = await DonorService.getMyProfileFromDB(userId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donor profile fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: error.message || "Failed to fetch profile",
    });
  }
};


const updateMyProfile = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const userId = user?.userId || user?.id;
    const result = await DonorService.updateMyProfileIntoDB(userId, req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donor profile updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: error.message || "Failed to update profile",
    });
  }
};


const getMyDonations = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const userId = user?.userId || user?.id;
    const result = await DonorService.getMyDonationsFromDB(userId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "My donations fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: error.message || "Failed to fetch donations",
    });
  }
};

const getAllShelters = async (req: Request, res: Response) => {
  try {
    const result = await DonorService.getAllSheltersFromDB();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Shelters fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: error.message || "Failed to fetch shelters",
    });
  }
};


const getSingleShelter = async (req: Request, res: Response) => {
  try {
    const  id  = req.params.id as string;
    const result = await DonorService.getSingleShelterByIdFromDB(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Shelter details fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: error.message || "Shelter not found",
    });
  }
};

export const DonorController = {
  getMyProfile,
  updateMyProfile,
  getMyDonations,
  getAllShelters,
  getSingleShelter,
};