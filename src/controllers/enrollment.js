const Enrollment  = require('~/models/enrollment')

exports.insertEnrollment = async (req, res, next) => {
  try {
    const newEnrollment = await Enrollment.insertEnrollment(req.body)
    if (newEnrollment) res.status(201).json(newEnrollment)
  } catch (err) {
    next(err)
  }
}

exports.getAllEnrollments = async (req, res, next) => {
  try {
    const allEnrollments = await Enrollment.getAllEnrollments()
    if (allEnrollments) res.status(200).json(allEnrollments)
  } catch (err) {
    next(err)
  }
}

exports.getAllEnrollmentsByUserId = async (req, res, next) => {
  try {
    const allEnrollments = await Enrollment.getAllEnrollmentsByUserId(req.params.userId)
    if (allEnrollments) res.status(200).json(allEnrollments)
    else res.status(400).json('Enrollment not found')
  } catch (err) {
    next(err)
  }
}

