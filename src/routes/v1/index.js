const express = require('express')
const { userRouter } = require('./user')
const { courseRouter } = require('./course')
const { classRouter } = require('./class')

const Router = express.Router()

Router.get('/v1', (req, res) => res.json('ready to use'))

Router.use('/v1', userRouter )
Router.use('/v1', courseRouter)
Router.use('/v1', classRouter)

module.exports = { Router }