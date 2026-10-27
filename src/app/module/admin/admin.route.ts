import express from "express";
import { auth } from "../../middleware/checkAuth";
import { AdminController } from "./admin.controller";
import { Role } from "../../../../generated/prisma/enums";
import { validateRequest } from "../../middleware/validateRequest";
import { AdminValidation } from "./admin.validation";
import { RescueRequestValidation } from "../rescueRequest/rescueRequest.validation";
import { RescueRequestController } from "../rescueRequest/rescueRequest.controller";

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
  "/:id/assign",
  auth(Role.VOLUNTEER, Role.ADMIN),
  validateRequest(RescueRequestValidation.assignVolunteerZodSchema),
  RescueRequestController.assignVolunteer
);
router.patch(
  "/users/:id/status",
  auth(Role.ADMIN),
  validateRequest(AdminValidation.updateUserStatusZodSchema),
  AdminController.updateUserStatus
);
router.get(
  "/all-donations",
  auth(Role.ADMIN),
  AdminController.getAllDonations
);


export const AdminRoutes = router;