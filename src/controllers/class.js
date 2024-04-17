/* eslint-disable indent */
const classService = require('../services/class')

const insertClass = async (req, res, next) => {
    try {
        const newClass = await classService.insertClass(req.body)
        res.status(201).json(newClass)
    } catch (err) {
        next(err)
    }
}

const getAllClasses = async (req, res, next) => {
    try {
        const allClasses = await classService.getAllClasses()
        res.status(200).json(allClasses)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    insertClass,
    getAllClasses
}