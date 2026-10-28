import { Request, Response } from "express";
import { VolunteerService } from "./volunteer.service";

const getVolunteerDashboardStats = async (req: Request, res: Response) => {
  try {
    const volunteerId = (req as any).user.userId; 
    const result = await VolunteerService.getVolunteerDashboardStats(volunteerId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Volunteer dashboard stats fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message || "Failed to fetch stats" });
  }
};

const getMyAssignedRescues = async (req: Request, res: Response) => {
  try {
    const volunteerId = (req as any).user.userId;
    const result = await VolunteerService.getMyAssignedRescues(volunteerId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Assigned rescues fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message || "Failed to fetch rescues" });
  }
};

const selfAssignRescue = async (req: Request, res: Response) => {
  try {
    const  id = req.params.id as string; // rescue request id
    const volunteerId = (req as any).user.userId;
    const result = await VolunteerService.selfAssignRescue(id, volunteerId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Rescue request assigned to you successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message || "Failed to assign rescue" });
  }
};

const updateMyRescueStatus = async (req: Request, res: Response) => {
  try {
    const  id = req.params.id as string;
    const { status } = req.body;
    const volunteerId = (req as any).user.userId;
    const result = await VolunteerService.updateMyRescueStatus(id, volunteerId, status);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Rescue status updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message || "Failed to update status" });
  }
};

export const VolunteerController = {
  getVolunteerDashboardStats,
  getMyAssignedRescues,
  selfAssignRescue,
  updateMyRescueStatus,
};