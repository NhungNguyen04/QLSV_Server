const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const Major = sequelize.define('major', {
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
  totalCredits: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const addMajor = async (data) => {
  try {
    const newMajor = await Major.create({ ...data })
    if (newMajor) return newMajor
  } catch (err) {
    throw new Error(err)
  }
}

const detailMajor = async (id) => {
  try {
    const major = await Major.findOne({ id }) 
    if (major) return major
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  Major,
  addMajor,
  detailMajor
}