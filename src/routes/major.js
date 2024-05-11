import { addMajor, detailMajor } from '~/controllers/major'

const express = require('express')

const majorRouter = express.Router()

majorRouter.post('/addmajor', addMajor)
majorRouter.get('/detailmajor/:id', detailMajor)

export default majorRouter