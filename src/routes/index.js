const express = require('express')
const { userRouter } = require('./user')
const { courseRouter } = require('./course')
const { classRouter } = require('./class')
const { enrollmentRouter } = require('./enrollment')
const { testRouter } = require('./test')

const Router = express.Router()

Router.get('/', (req, res) => res.json('ready to use'))

Router.use('/user', userRouter )
Router.use('/course', courseRouter)
Router.use('/class', classRouter)
Router.use('/enrollment', enrollmentRouter)
Router.use('/test', testRouter)

module.exports = { Router }