const courseService = require('../services/courseService')

exports.insertCourse = async (req, res, next) => {
  try {
    const newCourse = await courseService.insertCourse(req.body)
    res.status(200).json(newCourse)
  } catch (err) {
    next(err)
  }
}

exports.getAllCourses = async (req, res, next) => {
  try {
    const allCourses = await courseService.getAllCourses()
    res.status(200).json(allCourses)
  } catch (err) {
    next(err)
  }
}