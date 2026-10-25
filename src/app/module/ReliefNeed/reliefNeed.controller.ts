import { Request, Response } from "express";
import { ReliefNeedService } from "./reliefNeed.service";

const createReliefNeed = async (req: Request, res: Response) => {
  try {
    const result = await ReliefNeedService.createReliefNeed(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Relief need logged successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create relief need",
    });
  }
};

const getAllReliefNeeds = async (req: Request, res: Response) => {
  try {
    const filters = {
      searchTerm: req.query.searchTerm as string,
      shelterId: req.query.shelterId as string,
      itemCategory: req.query.itemCategory as string,
      urgency: req.query.urgency as any,
      status: req.query.status as any,
    };

    const result = await ReliefNeedService.getAllReliefNeeds(filters);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Relief needs fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch relief needs",
    });
  }
};

const getReliefNeedById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await ReliefNeedService.getReliefNeedById(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Relief need details fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch relief need",
    });
  }
};

const updateReliefNeed = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await ReliefNeedService.updateReliefNeed(id, req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Relief need updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to update relief need",
    });
  }
};

const deleteReliefNeed = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await ReliefNeedService.deleteReliefNeed(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Relief need deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to delete relief need",
    });
  }
};

export const ReliefNeedController = {
  createReliefNeed,
  getAllReliefNeeds,
  getReliefNeedById,
  updateReliefNeed,
  deleteReliefNeed,
};