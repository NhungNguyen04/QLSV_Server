const Notification  = require('~/models/notification')

exports.createNoti = async (req, res, next) => {
  try {
    const newNoti = await Notification.createNoti(req.body)
    if (newNoti) res.status(201).json(newNoti)
  } catch (err) {
    next(err)
  }
}
exports.getNotificationsById = async (req, res, next) => {
  try {
    const result = await Notification.getNotificationsById(req.params.id)
    if (result) res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}