import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { RescueRequestValidation } from "./rescueRequest.validation";
import { RescueRequestController } from "./rescueRequest.controller";
import { Role } from "../../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";

const router = express.Router();


router.post(
  "/",
  validateRequest(RescueRequestValidation.createRescueRequestZodSchema),
  RescueRequestController.createRescueRequest
);


router.get(
  "/",
  auth(Role.VOLUNTEER, Role.ADMIN),
  RescueRequestController.getAllRescueRequests
);

router.get(
  "/:id",
  auth(Role.VOLUNTEER, Role.ADMIN),
  RescueRequestController.getRescueRequestById
);


router.patch(
  "/:id/assign",
  auth(Role.VOLUNTEER, Role.ADMIN),
  validateRequest(RescueRequestValidation.assignVolunteerZodSchema),
  RescueRequestController.assignVolunteer
);


router.patch(
  "/:id/status",
  auth(Role.VOLUNTEER, Role.ADMIN),
  validateRequest(RescueRequestValidation.updateRescueStatusZodSchema),
  RescueRequestController.updateRescueStatus
);


router.delete(
  "/:id",
  auth(Role.VOLUNTEER, Role.ADMIN),
  RescueRequestController.deleteRescueRequest
);

export const RescueRequestRoutes = router;