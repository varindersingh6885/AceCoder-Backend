import express from 'express'
const router = express.Router()

import {customInputEvaluate,execute, submissionEvaluate} from '../controllers/codeExecutionControllers.js'

router.post('/execute/:problemId', customInputEvaluate)
router.post('/submission/:problemId',submissionEvaluate);
router.post('/execute/',execute)


export default router