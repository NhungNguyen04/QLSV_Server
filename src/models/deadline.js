const Sequelize = require('sequelize')

const sequelize = require('../config/database')
const { User } = require('./user')
const { Course } = require('./course')

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

Course.hasMany(Deadline, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})


module.exports = {
  Deadline
}