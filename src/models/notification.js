const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const Notification = sequelize.define('notification', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull:false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  begin: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  end: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  room: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = {
  Notification
}