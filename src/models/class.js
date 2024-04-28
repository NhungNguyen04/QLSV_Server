/* eslint-disable indent */
const Sequelize = require('sequelize')
const { Course } = require('../models/course')
const { Notification } = require('../models/notification')
const { Test } = require('../models/test')
const sequelize = require('../config/database')

const Class = sequelize.define('class', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    room: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lecturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    begin: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    end: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    dateBegin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateEnd: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

const insertClass = async (data) => {
    try {
        const newClass = await Class.create({
            ...data
        })
        return newClass
    } catch (err) {
        throw new Error(err)
    }
}

const getAllClasses = async () => {
    try {
        return await Class.findAll()
    } catch (err) {
        throw new Error(err)
    }
}


Course.hasMany(Class, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Class.belongsTo(Course)

Class.hasMany(Notification, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Notification.belongsTo(Class)

Class.hasMany(Test, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Test.belongsTo(Class)


module.exports = {
    Class,
    insertClass,
    getAllClasses
}