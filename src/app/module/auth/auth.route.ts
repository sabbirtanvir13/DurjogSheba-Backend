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
    "/verify-email", 
    validateRequest(UserValidation.DonorEmailVerifyZodSchema), 
    AuthController.verifyDonorEmail
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

router.post(
    "/forget_Passwrod", 
    validateRequest(UserValidation.ForgetPasswordZodSchema), 
    AuthController.ForgetPasswrod
);

router.post(
    "/reset_Passwrod", 
    validateRequest(UserValidation.ResetPasswordZodSchema), 
    AuthController.ResetPasswrod
);

export const AuthRoutes = router;