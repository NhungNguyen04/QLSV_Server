const express = require('express')
const { insertEnrollment, getAllEnrollments, getAllEnrollmentsByUserId, getEnrollmentsBySemester } = require('~/controllers/enrollment')


const enrollmentRouter = express.Router()


enrollmentRouter.post('/insertenrollment', insertEnrollment )
enrollmentRouter.get('/getallenrollments', getAllEnrollments)
enrollmentRouter.get('/getallenrollmentsbyuserid/:userId', getAllEnrollmentsByUserId)
enrollmentRouter.get('/getenrollmentsbysemester/:userId', getEnrollmentsBySemester)

module.exports = { enrollmentRouter }