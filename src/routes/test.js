const express = require('express')
const { insertTest, getAllTestsByClassId } = require('~/controllers/test')


const testRouter = express.Router()


testRouter.post('/inserttest', insertTest )
testRouter.get('/gettestbyclassid/:classId', getAllTestsByClassId)
module.exports = { testRouter }