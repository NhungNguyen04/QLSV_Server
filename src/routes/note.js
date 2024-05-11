import { createNote, deleteNote, editNote, getNotesByUserID } from '~/controllers/note'

const express = require('express')

const noteRouter = express.Router()

noteRouter.post('/createnote', createNote)
noteRouter.get('/getnotesbyuser/:id', getNotesByUserID)
noteRouter.put('/editnote/:idNote', editNote)
noteRouter.delete('/deletenote/:idNote', deleteNote)

export default noteRouter