import express from "express";
import { ReliefNeedController } from "./reliefNeed.controller";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { ReliefNeedValidation } from "./reliefNeed.validation";


const router = express.Router();

// Public Endpoints
router.get("/", ReliefNeedController.getAllReliefNeeds);
router.get("/:id", ReliefNeedController.getReliefNeedById);

// Protected Endpoints
router.post(
  "/",
  auth(Role.VOLUNTEER, Role.ADMIN),
  validateRequest(ReliefNeedValidation.createReliefNeedZodSchema),
  ReliefNeedController.createReliefNeed
);

router.patch(
  "/:id",
  auth(Role.DONOR, Role.VOLUNTEER, Role.ADMIN),
  validateRequest(ReliefNeedValidation.updateReliefNeedZodSchema),
  ReliefNeedController.updateReliefNeed
);

router.delete(
  "/:id",
  auth(Role.VOLUNTEER, Role.ADMIN),
  ReliefNeedController.deleteReliefNeed
);

export const ReliefNeedRoutes = router;