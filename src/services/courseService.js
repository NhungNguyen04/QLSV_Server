const Course = require('../models/course')

const insertCourse = async (data) => {
  try {
    return await Course.insertCourse(data)
  } catch (err) {
    throw new err
  }
}

const getAllCourses = async () => {
  try {
    return await Course.getAllCourses()
  } catch (err) {
    throw new err
  }
}
module.exports = {
  insertCourse,
  getAllCourses
}