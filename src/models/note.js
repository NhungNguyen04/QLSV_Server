const Sequelize = require('sequelize')

const sequelize = require('../config/database')
const { User } = require('./user')

const Note = sequelize.define('note', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.hasMany(Note, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

module.exports = {
  Note
}