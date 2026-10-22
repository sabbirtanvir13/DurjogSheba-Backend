import { Router } from "express";
import { auth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { AuthController } from "./auth.controller";
import { Role } from "./auth.interface";
import { UserValidation } from "./auth.validation";

const router = Router();

router.post(
    "/register", 
    validateRequest(UserValidation.UsersregisterZodSchema), 
    AuthController.registerUser
);

router.post(
    "/login", 
    validateRequest(UserValidation.LoginZodSchema), 
    AuthController.loginUser
);

router.get(
    "/me",
    auth(Role.ADMIN, Role.VOLUNTEER, Role.DONOR),
    AuthController.getMe
);

router.post("/refresh-token", AuthController.refreshToken);
router.post("/google", AuthController.googleLogin);

export const AuthRoutes = router;