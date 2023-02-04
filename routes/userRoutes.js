import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {authUser, createUser, getUserProfile} from '../controllers/userControllers.js'
const router=express.Router();

router.route('/login').post(authUser)

router.route('/profile').get(protect,getUserProfile)

router.route('/register').post(createUser)

export default router;