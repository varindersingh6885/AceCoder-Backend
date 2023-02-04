import express from 'express'
import {submit,getAll,getOne} from '../controllers/discussionsControllers.js'

const router = express.Router();

router.post('/submit/:problemId',submit);
router.get('/getAll/:problemId',getAll)
router.get('/get/:discussionId',getOne)

export default router;