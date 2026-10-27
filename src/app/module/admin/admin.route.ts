import express from "express";
import { auth } from "../../middleware/checkAuth";
import { AdminController } from "./admin.controller";
import { Role } from "../../../../generated/prisma/enums";
import { validateRequest } from "../../middleware/validateRequest";
import { AdminValidation } from "./admin.validation";

const router = express.Router();


router.get(
  "/dashboard-stats",
  auth(Role.ADMIN),
  AdminController.getAdminDashboardStats
);

router.get(
  "/users",
  auth(Role.ADMIN),
  AdminController.getAllUsers
);

router.patch(
  "/users/:id/status",
  auth(Role.ADMIN),
  validateRequest(AdminValidation.updateUserStatusZodSchema),
  AdminController.updateUserStatus
);

export const AdminRoutes = router;