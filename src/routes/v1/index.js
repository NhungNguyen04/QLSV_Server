const express = require('express')
const { userRouter } = require('./user')

const Router = express.Router()

Router.get('/v1', (req, res) => res.json('ready to use'))

Router.use('/v2', userRouter )

module.exports = { Router }