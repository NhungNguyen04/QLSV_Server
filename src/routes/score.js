import { getScoreById, insertScore } from '~/controllers/score'

const express = require('express')

const scoreRouter = express.Router()

scoreRouter.post('/insertscore', insertScore)
scoreRouter.get('/getscorebyid/:id', getScoreById)
export default scoreRouter