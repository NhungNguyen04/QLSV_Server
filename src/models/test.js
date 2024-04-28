const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const Test = sequelize.define('test', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  room: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const insertTest = async (data) => {
  try {
    const newTest = await Test.create({
      ...data
    })
    return newTest
  } catch (err) {
    throw new Error(err)
  }
}

const getAllTestsByClassId = async (classId) => {
  try {
    const allTestsByClassId = await Test.findAll({ where: { classId } })
    return allTestsByClassId
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  Test,
  insertTest,
  getAllTestsByClassId
}