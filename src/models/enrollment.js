/* eslint-disable no-trailing-spaces */
const Sequelize = require('sequelize')
const { Class } = require('../models/class')
const { User } = require('../models/user')
const { Score } = require('../models/score')
const sequelize = require('../config/database')

const Enrollment = sequelize.define('enrollment', ({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }
}))

const insertEnrollment = async (data) => {
  try {
    const newEnrollment = await Enrollment.create({
      ...data
    })
    return newEnrollment
  } catch (err) {
    throw new Error(err)
  }
}

const getAllEnrollments = async () => {
  try {
    const allEnrollments = await Enrollment.findAll()
    return allEnrollments
  } catch (err) {
    throw new Error(err)
  }
}

const getAllEnrollmentsByUserId = async (id) => {
  try {
    const allEnrollments = await Enrollment.findAll({
      where: {
        userId: id
      }
    })
    return allEnrollments
  } catch (err) {
    throw new Error(err)
  }
}

Class.belongsToMany(User, { through: { model: Enrollment, unique: false } })
User.belongsToMany(Class, { through: { model: Enrollment, unique: false } })

Enrollment.hasMany(Score)
Score.belongsTo(Enrollment)

module.exports = {
  Enrollment,
  insertEnrollment,
  getAllEnrollments,
  getAllEnrollmentsByUserId
}