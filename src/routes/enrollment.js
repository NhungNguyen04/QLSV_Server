const express = require('express')
const { insertEnrollment, getAllEnrollments, getAllEnrollmentsByUserId } = require('~/controllers/enrollment')


const enrollmentRouter = express.Router()


enrollmentRouter.post('/insertenrollment', insertEnrollment )
enrollmentRouter.get('/getallenrollments', getAllEnrollments)
enrollmentRouter.get('/getallenrollmentsbyuserid/:userId', getAllEnrollmentsByUserId)
module.exports = { enrollmentRouter }