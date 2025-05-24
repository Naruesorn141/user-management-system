import express from 'express'
import { login, me, getUsers } from '../controllers/user.controller'
import { authenticate } from '../middleware/auth.middleware'
const router = express.Router()

router.post('/login', login)
router.get('/me', authenticate, me)
router.get('/users', authenticate, getUsers)

export default router