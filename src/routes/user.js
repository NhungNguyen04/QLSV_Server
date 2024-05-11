const express = require('express')
const { getAllUsers, userLogin, userRegister, detailUser } = require('~/controllers/user')

const userRouter = express.Router()

userRouter.get('/getallusers', getAllUsers )
userRouter.post('/login', userLogin)
userRouter.post('/register', userRegister)
userRouter.get('/detailuser/:id', detailUser)
module.exports = { userRouter }