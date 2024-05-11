const Deadline = require('~/models/deadline')

exports.createDeadline = async (req, res, next) => {
  try {
    const newDeadline = await Deadline.createDeadline(req.body)
    if (newDeadline) res.status(201).json(newDeadline)
  } catch (err) {
    next(err)
  }
}

exports.getDeadlineBySemester = async (req, res, next) => {
  try {
    const result = await Deadline.getDeadlineBySemester(req.query, req.params.id)
    if (result) res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

exports.submitDeadline = async (req, res, next) => {
  try {
    const result = await Deadline.submitDeadline(req.body, req.params.id)
    if (result) res.status(200).json('updated succesfully')
  } catch (err) {
    next(err)
  }
}