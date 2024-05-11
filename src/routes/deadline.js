import { createDeadline, getDeadlineBySemester, submitDeadline } from '~/controllers/deadline'

const express = require('express')

const deadlineRouter = express.Router()

deadlineRouter.post('/createdeadline', createDeadline)
deadlineRouter.get('/deadlinebysemester/:id', getDeadlineBySemester)
deadlineRouter.put('/submitdeadline/:id', submitDeadline)
export default deadlineRouter