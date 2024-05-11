const Sequelize = require('sequelize')

const sequelize = require('../config/database')
const { User } = require('./user')
const { Class } = require('./class')
const { getEnrollmentsBySemester } = require('./enrollment')

const Deadline = sequelize.define('deadline', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.hasMany(Deadline, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Class.hasMany(Deadline, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

const createDeadline = async (data) => {
  try {
    const newDeadline = await Deadline.create({ ...data })
    if (newDeadline) return newDeadline
  } catch (err) {
    throw new Error(err)
  }
}

const getDeadlineBySemester = async (data, id) => {
  try {
    const enrollments = await getEnrollmentsBySemester(data, id)
    const result = []
    for (let i = 0; i < enrollments.length; i++) {
      const deadlineByClass = await Deadline.findAll({ where: { classMaLop: enrollments[i].classMaLop } })
      result.push(...deadlineByClass)
    }

    if (result) return result
  } catch (err) {
    throw new Error(err)
  }
}

const submitDeadline = async (data, id) => {
  try {
    const result = await Deadline.update({ ...data }, { where: { id } })
    if (result) return result
  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  Deadline,
  createDeadline,
  getDeadlineBySemester,
  submitDeadline
}