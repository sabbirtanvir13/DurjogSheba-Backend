import { Router } from 'express'
import { auth } from '../../middleware/checkAuth'
import { Role } from './auth.interface'
import { AuthController } from './auth.controller'

const router = Router()

router.post('/register', AuthController.registerUser)
router.post('/login', AuthController.loginUser)
router.get(
    '/me',
    auth(Role.ADMIN, Role.VOLUNTEER, Role.DONOR),
    AuthController.getMe,
)
router.post('/refresh-token', AuthController.refreshToken)

export const AuthRoutes = router