const User = require('~/models/user')

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.getAllUsers()
    if (allUsers) res.status(200).json(allUsers)
  } catch (err) { next(err) }
}

exports.userLogin = async (req, res, next) => {

  try {
    const existUser = await User.userLogin(req.body)
    if (existUser) res.status(200).json(existUser)
    else res.status(401).json('Unauthorized')
  } catch (err) {
    next(err)
  }
}

exports.userRegister = async (req, res, next) => {
  try {
    const newUser = await User.userRegister(req.body)
    if (newUser) res.status(200).json(newUser)
  } catch (err) {
    next(err)
  }
}

exports.detailUser = async (req, res, next) => {
  try {
    const user = await User.detailUser(req.params.id)
    if (user) res.status(200).json([user])
  } catch (err) {
    next(err)
  }
}