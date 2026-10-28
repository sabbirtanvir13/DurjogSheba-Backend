import express from "express";
import { DonorController } from "./donor.controller";
import { auth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();


router.get("/me", auth(Role.DONOR, Role.ADMIN), DonorController.getMyProfile);
router.patch("/me", auth(Role.DONOR), DonorController.updateMyProfile);
router.get("/my-donations", auth(Role.DONOR), DonorController.getMyDonations);


router.get("/shelters", auth(Role.DONOR, Role.VOLUNTEER, Role.ADMIN), DonorController.getAllShelters);
router.get("/shelters/:id", auth(Role.DONOR, Role.VOLUNTEER, Role.ADMIN), DonorController.getSingleShelter);

export const DonorRoutes = router;