const Course = require('~/models/course')
exports.insertCourse = async (req, res, next) => {
  try {
    const newCourse = await Course.insertCourse(req.body)
    if (newCourse) res.status(200).json(newCourse)
  } catch (err) {
    next(err)
  }
}

exports.getAllCourses = async (req, res, next) => {
  try {
    const allCourses = await Course.getAllCourses()
    if (allCourses) res.status(200).json(allCourses)
  } catch (err) {
    next(err)
  }
}