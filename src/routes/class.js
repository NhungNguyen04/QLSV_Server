const express = require('express')
const { insertClass, getAllClasses, getClassesById, getTestById, finishClass, getScoreBySemester } = require('~/controllers/class')



const classRouter = express.Router()


classRouter.post('/insertclass', insertClass )
classRouter.get('/getallclasses', getAllClasses)
classRouter.get('/allclassesbyid/:id', getClassesById)
classRouter.get('/gettestbyid/:id', getTestById)
classRouter.put('/finishclass/:id', finishClass)
classRouter.get('/getscorebysemester/:id', getScoreBySemester)
module.exports = { classRouter }