const express = require('express')
const { insertCourse, getAllCourses } = require('~/controllers/course')

const courseRouter = express.Router()

courseRouter.post('/insertcourse', insertCourse)
courseRouter.get('/getallcourses', getAllCourses )

module.exports = { courseRouter }