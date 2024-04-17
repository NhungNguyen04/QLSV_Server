const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll()
    return allUsers
  }
  catch (err) {
    throw new err
  }
}

const userLogin = async (data) => {
  const { username, password } = data
  try {
    const existUser = await User.findOne({
      where: {
        username
      },
      raw: true
    })

    if (existUser && existUser.password === password) {
      console.log(existUser)
      return existUser
    } else {
      return false
    }
  } catch (err) {
    throw new err
  }
}

module.exports = {
  User,
  getAllUsers,
  userLogin
}