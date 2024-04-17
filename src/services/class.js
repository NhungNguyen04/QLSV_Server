/* eslint-disable indent */
const Class = require('~/models/class')

const insertClass = async (data) => {
    try {
        const newClass = await Class.insertClass(data)
        return newClass
    } catch (err) {
        throw new err
    }
}

const getAllClasses = async () => {
    try {
        return await Class.getAllClasses()
    } catch (err) {
        throw new err
    }
}

module.exports = {
    insertClass,
    getAllClasses
}