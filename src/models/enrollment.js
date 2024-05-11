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
  },
  hocKi: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  namHoc: {
    type: Sequelize.STRING,
    allowNull: false
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

const getEnrollmentsBySemester = async (data, userId) => {
  try {
    const result = await Enrollment.findAll({
      where: {
        hocKi: data.hocKi,
        namHoc: data.namHoc,
        userId: userId
      }
    })
    if (result) return result
  } catch (err) {
    throw new Error(err)
  }
}


Enrollment.hasMany(Score)
Score.belongsTo(Enrollment)

module.exports = {
  Enrollment,
  insertEnrollment,
  getAllEnrollments,
  getAllEnrollmentsByUserId,
  getEnrollmentsBySemester
}