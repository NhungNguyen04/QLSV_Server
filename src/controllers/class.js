const Class = require('~/models/class')

/* eslint-disable indent */

const insertClass = async (req, res, next) => {
    try {
        const newClass = await Class.insertClass(req.body)
        if (newClass) res.status(200).json(newClass)
    } catch (err) {
        next(err)
    }
}

const getAllClasses = async (req, res, next) => {
    try {
        const allClasses = await Class.getAllClasses()
        if (allClasses) res.status(200).json(allClasses)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    insertClass,
    getAllClasses
}