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
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.hasMany(Note, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

const createNote = async (data) => {
  try {
    const newNote = await Note.create({ ...data })
    if (newNote) return newNote
  } catch (err) {
    throw new Error(err)
  }
}

const getNotesByUserID = async (id) => {
  try {
    const Notes = await Note.findAll({
      where: {
        userId: id
      }
    })
    if (Notes) return Notes
  } catch (err) {
    throw new Error(err)
  }
}

const editNote = async (data, id) => {
  try {
    await Note.update({ ...data }, { where: { id } })
    const editedNote = await Note.findOne({ where: { id } })
    if (editedNote) return editedNote
  } catch (err) {
    throw new Error(err)
  }
}

const deleteNote = async (id) => {
  try {
    const result = await Note.destroy({ where: { id } })
    return result
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  Note,
  createNote,
  editNote,
  getNotesByUserID,
  deleteNote
}