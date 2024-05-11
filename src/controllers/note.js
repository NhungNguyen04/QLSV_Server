const Note = require('~/models/note')

exports.createNote = async (req, res, next) => {
  try {
    const newNote = await Note.createNote(req.body)
    if (newNote) res.status(201).json(newNote)
  } catch (err) {
    next(err)
  }
}

exports.getNotesByUserID = async (req, res, next) => {
  const { id } = req.params
  try {
    const notes = await Note.getNotesByUserID(id)
    if (notes) res.status(200).json(notes)
  } catch (err) {
    next(err)
  }
}

exports.editNote = async (req, res, next) => {
  const { idNote } = req.params

  try {
    const editedNote = await Note.editNote(req.body, idNote)
    if (editedNote) res.status(200).json(editedNote)
  } catch (err) {
    next(err)
  }
}

exports.deleteNote = async (req, res, next) => {
  const { idNote } = req.params
  try {
    const result = await Note.deleteNode(idNote)
    if (result) res.status(200).json('Deleted Succesfully')
    else res.status(400).json('id not found')
  } catch (err) {
    next(err)
  }
}