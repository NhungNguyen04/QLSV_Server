const Sequelize = require('sequelize')

const sequelize = require('~/config/database')

const { Class } = require('./class')
const { Course } = require('./course')
const { getEnrollmentsBySemester } = require('./enrollment')

const Score = sequelize.define('score', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  s1: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  s2: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  s3: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  s4: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
})

const insertScore = async (data) => {
  try {
    const result = await Score.create({ ...data })
    if (result) return result
  } catch (err) {
    throw new Error(err)
  }
}
const getScoreById = async (id) => {
  try {
    const result = await Score.findOne({ where: { enrollmentId: id } })
    if (result) return result
  } catch (err) {
    throw new Error(err)
  }
}



module.exports = {
  Score,
  insertScore,
  getScoreById
}