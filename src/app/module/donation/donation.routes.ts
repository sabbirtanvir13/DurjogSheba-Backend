import express, { Router } from "express";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { DonationController } from "./donation.controller";
import { Role } from "../../../../generated/prisma/enums";
import { DonationValidation } from "./donation.validation";


const router = Router();


router.post(
  "/",
  auth(Role.DONOR, Role.ADMIN),
  validateRequest(DonationValidation.createDonationZodSchema),
  DonationController.initiateDonation
);


router.get(
  "/bkash/callback/:donationId",
  DonationController.bkashCallback
);

router.get(
  "/bkash/callback",
  DonationController.bkashCallback
);

export const DonationRoutes = router;