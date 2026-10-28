import express from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { VolunteerController } from "./volunteer.controller";


const router = express.Router();

router.get(
  "/dashboard-stats",
  auth(Role.VOLUNTEER, Role.ADMIN),
  VolunteerController.getVolunteerDashboardStats
);


router.get(
  "/my-rescues",
  auth(Role.VOLUNTEER),
  VolunteerController.getMyAssignedRescues
);


router.patch(
  "/rescue/:id/self-assign",
  auth(Role.VOLUNTEER),
  VolunteerController.selfAssignRescue
);


router.patch(
  "/rescue/:id/status",
  auth(Role.VOLUNTEER),
  VolunteerController.updateMyRescueStatus
);

export const VolunteerRoutes = router;