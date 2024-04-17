const userService = require('~/services/userService')

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers()
    res.status(200).json(allUsers)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.userLogin = async (req, res, next) => {

  try {
    const existUser = await userService.userLogin(req.body)
    if (existUser) res.status(200).json(existUser)
    else res.status(400).json('wrong credentials')
  } catch (err) {
    next(err)
  }
}

exports.userRegister = async (req, res, next) => {
  try {
    const newUser = await userService.userRegister(req.body)
    if (newUser) res.status(200).json(newUser)
  } catch (err) {
    next(err)
  }
}