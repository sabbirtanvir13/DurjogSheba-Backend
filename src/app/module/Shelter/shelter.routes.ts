import express from "express";
import { ShelterController } from "./shelter.controller";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleware/checkAuth";
import { upload } from "../../lib/multer";
import { validateRequest } from "../../middleware/validateRequest";
import { ShelterValidation } from "./shelter.validation";

const router = express.Router();

router.get("/", ShelterController.getAllShelters);
router.get("/:id", ShelterController.getShelterById);

router.post(
	"/create-shelter",
	auth(Role.ADMIN, Role.VOLUNTEER),
	upload.array("images", 5),
	validateRequest(ShelterValidation.createShelterZodSchema),
	ShelterController.createShelter,
);

router.patch(
	"/:id",
	auth(Role.ADMIN, Role.VOLUNTEER),
	validateRequest(ShelterValidation.updateShelterZodSchema),
	ShelterController.updateShelter,
);

router.patch(
	"/:id/upload-images",
	auth(Role.ADMIN, Role.VOLUNTEER),
	upload.array("images", 5),
	ShelterController.uploadShelterImages,
);

//  Admin only can delete
router.delete("/:id", auth(Role.ADMIN), ShelterController.deleteShelter);

export const ShelterRoutes = router;
