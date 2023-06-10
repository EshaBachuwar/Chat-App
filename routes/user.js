import express from 'express';
import { allUsers, authUser, registerUser } from '../controllers/user.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

//get
router.route('/').get(protect, allUsers);
router.route('/').post(registerUser);
router.post('/login', authUser);

export default router;
