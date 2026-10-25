import { Request, Response } from "express";
import { RescueRequestService } from "./rescueRequest.service";

const createRescueRequest = async (req: Request, res: Response) => {
  try {
    const result = await RescueRequestService.createRescueRequest(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Rescue request submitted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create rescue request",
    });
  }
};

const getAllRescueRequests = async (req: Request, res: Response) => {
  try {
    const filters = {
      searchTerm: req.query.searchTerm as string,
      shelterId: req.query.shelterId as string,
      assignedToId: req.query.assignedToId as string,
      urgency: req.query.urgency as any,
      status: req.query.status as any,
    };

    const result = await RescueRequestService.getAllRescueRequests(filters);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Rescue requests fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch rescue requests",
    });
  }
};

const getRescueRequestById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await RescueRequestService.getRescueRequestById(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Rescue request details fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch rescue request",
    });
  }
};

const assignVolunteer = async (req: Request, res: Response) => {
  try {
  const id = req.params.id as string;
    const { assignedToId } = req.body;
    const result = await RescueRequestService.assignVolunteer(id, assignedToId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Volunteer assigned to rescue request successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to assign volunteer",
    });
  }
};

const updateRescueStatus = async (req: Request, res: Response) => {
  try {
  const id = req.params.id as string;
    const { status } = req.body;
    const result = await RescueRequestService.updateRescueStatus(id, status);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Rescue request status updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to update status",
    });
  }
};

const deleteRescueRequest = async (req: Request, res: Response) => {
  try {
  const id = req.params.id as string;
    const result = await RescueRequestService.deleteRescueRequest(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Rescue request deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to delete rescue request",
    });
  }
};

export const RescueRequestController = {
  createRescueRequest,
  getAllRescueRequests,
  getRescueRequestById,
  assignVolunteer,
  updateRescueStatus,
  deleteRescueRequest,
};