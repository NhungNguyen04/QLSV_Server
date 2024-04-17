const express = require('express')
const { getAllUsers, userLogin } = require('~/controllers/user')

const userRouter = express.Router()

userRouter.get('/getallusers', getAllUsers )
userRouter.post('/login', userLogin)
module.exports = { userRouter }