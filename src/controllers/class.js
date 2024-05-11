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

const getClassesById = async (req, res, next) => {
    try {
        const result = await Class.getClassesById(req.params.id, req.query.dow)
        if (result) res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

const getTestById = async (req, res, next) => {
    try {
        const result = await Class.getTestById(req.query, req.params.id)
        if (result) res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

const finishClass = async (req, res, next) => {
    try {
        const result = await Class.finishClass(req.body, req.params.id)
        if (result) res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

const getScoreBySemester = async (req, res, next) => {
    try {
        const result = await Class.getScoreBySemester(req.query, req.params.id)
        if (result) res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    insertClass,
    getAllClasses,
    getClassesById,
    getTestById,
    finishClass,
    getScoreBySemester
}