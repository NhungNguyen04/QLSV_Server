const express = require('express')
const { insertClass, getAllClasses } = require('~/controllers/class')

const classRouter = express.Router()


classRouter.post('/insertclass', insertClass )
classRouter.get('/getallclasses', getAllClasses)

module.exports = { classRouter }