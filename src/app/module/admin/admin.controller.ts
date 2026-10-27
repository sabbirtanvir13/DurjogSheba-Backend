import { Request, Response } from "express";
import { AdminService } from "./admin.service";

const getAdminDashboardStats = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.getAdminDashboardStats();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Admin dashboard stats fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch dashboard stats",
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const filters = {
      searchTerm: req.query.searchTerm as string,
      role: req.query.role as string,
      status: req.query.status as any,
    };
    const result = await AdminService.getAllUsers(filters);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch users",
    });
  }
};

const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const  id  = req.params.is as string;
    const { status } = req.body;
    const result = await AdminService.updateUserStatus(id, status);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: `User status updated to ${status} successfully`,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to update user status",
    });
  }
};

export const AdminController = {
  getAdminDashboardStats,
  getAllUsers,
  updateUserStatus,
};