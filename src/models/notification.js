const Sequelize = require('sequelize')

const sequelize = require('../config/database')
const { Class } = require('./class')
const { getAllEnrollmentsByUserId } = require('./enrollment')


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
    allowNull: true
  },
  begin: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  end: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  room: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

const createNoti = async (data) => {
  try {
    const { type, maLop, date } = data
    if (type === 'NGHỈ HỌC') {
      const classData = await Class.findOne({ maLop })
      const result = await Notification.create({
        type,
        date,
        room: classData.room,
        begin: classData.begin,
        end: classData.end,
        maLop
      })

      if (result) return result
    }
    const result = await Notification.create({ ...data })
    if (result) return result

  } catch (err) {
    throw new Error(err)
  }
}

const getNotificationsById = async (id) => {
  try {
    const result = []
    const allClassesBelongToId = await getAllEnrollmentsByUserId(id)
    for (let i = 0; i < allClassesBelongToId.length; i++) {
      const notificationsByClass = await Notification.findAll({ where: { maLop: allClassesBelongToId[i].classMaLop }, order: [['createdAt', 'DESC']] })
      result.push(...notificationsByClass)
    }
    if (result) return result
  } catch (err) {
    throw new Error(err)
  }
}

Notification.belongsTo(Class, {
  foreignKey: 'maLop',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})


module.exports = {
  Notification,
  createNoti,
  getNotificationsById
}