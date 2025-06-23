import express from 'express';
import { login, verifyUserController } from '../controllers/authControllers.js';
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/login', login);
router.get('/verify', authMiddleware, verifyUserController);

export default router;