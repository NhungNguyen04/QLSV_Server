const Sequelize = require('sequelize')

const sequelize = require('~/config/database')

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

module.exports = {
  Score
}