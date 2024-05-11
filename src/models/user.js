const Sequelize = require('sequelize')

const sequelize = require('../config/database')
const { Major } = require('./major')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accumulatedCredits: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalScore: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  accumlatedScore: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  class: {
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
      return existUser
    }
  } catch (err) {
    throw new err
  }
}

const userRegister = async (data) => {
  try {
    const [newUser, created] = await User.findOrCreate({
      where: {
        username: data.username
      },
      defaults: {
        ...data
      }
    })
    if (created) return newUser
  } catch (err) {
    throw new Error(err)
  }
}

const detailUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id } })
    if (user) {
      const major = await Major.findOne({ where: { id: user.majorId } })
      user.dataValues['majorName'] = major.name
      return user
    }
  } catch (err) {
    throw new Error(err)
  }
}

User.belongsTo(Major)

module.exports = {
  User,
  getAllUsers,
  userLogin,
  userRegister,
  detailUser
}