const express = require('express')
const { getAllUsers, userLogin, userRegister } = require('~/controllers/user')

const userRouter = express.Router()

userRouter.get('/getallusers', getAllUsers )
userRouter.post('/login', userLogin)
userRouter.post('/register', userRegister)
module.exports = { userRouter }