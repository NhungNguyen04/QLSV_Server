const User = require('~/models/user')

const getAllUsers = async () => {
  try {
    const allUsers = await User.getAllUsers()
    return allUsers
  } catch (err) { throw new err }
}

const userLogin = async (data) => {
  try {
    const existUser = await User.userLogin(data)
    return existUser
  } catch (err) {
    throw new err
  }
}

const userRegister = async (data) => {
  try {
    const newUser = await User.userRegister(data)
    return newUser
  } catch (err) {
    throw new err
  }
}

module.exports = {
  getAllUsers,
  userLogin,
  userRegister
}