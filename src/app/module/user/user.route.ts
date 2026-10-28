import express from "express";

import { upload } from "../../lib/multer";
import { UserController } from "./user.controller";
import { auth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.patch(
	"/upload-profile-image",
	auth(Role.DONOR, Role.VOLUNTEER, Role.ADMIN),
	upload.single("image"),
	UserController.uploadProfileImage,
);

export const UserRoutes = router;
