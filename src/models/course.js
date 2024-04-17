const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const Course = sequelize.define('course', {
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
  credits: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const insertCourse = async (data) => {
  try {
    const [newCourse, created] = await Course.findOrCreate({
      where: {
        name: data.name,
        type: data.type
      },
      defaults: {
        credits: data.credits
      }
    })

    if (created) return newCourse

  } catch (err) {
    throw new Error(err)
  }
}

const getAllCourses = async () => {
  try {
    return await Course.findAll()
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  Course,
  insertCourse,
  getAllCourses
}