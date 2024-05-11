import { createNoti, getNotificationsById } from '~/controllers/noti'

const express = require('express')

const notiRouter = express.Router()

notiRouter.post('/createnoti', createNoti)
notiRouter.get('/getnotibyid/:id', getNotificationsById)
export default notiRouter