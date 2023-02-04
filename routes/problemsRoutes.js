import express from 'express'
import {getProblemBySearchTitle,getProblemsAll} from '../controllers/problemControllers.js'

const router = express.Router()

router.get('/get/all',getProblemsAll)

router.get('/get/:title',getProblemBySearchTitle)

export default router