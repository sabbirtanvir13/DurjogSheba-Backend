import { Router } from "express";
import { auth } from "../../middleware/checkAuth";
import { AuthController } from "./auth.controller";
import { Role } from "./auth.interface";

const router = Router();

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.get(
	"/me",
	auth(Role.ADMIN, Role.VOLUNTEER, Role.DONOR),
	AuthController.getMe,
);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/google", AuthController.googleLogin);
export const AuthRoutes = router;
