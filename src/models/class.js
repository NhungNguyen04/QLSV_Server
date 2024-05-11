/* eslint-disable indent */
const Sequelize = require('sequelize')
const { Course } = require('../models/course')
const { Test, getAllTestsByClassId } = require('../models/test')
const sequelize = require('../config/database')
const { getAllEnrollmentsByUserId, Enrollment, getEnrollmentsBySemester } = require('./enrollment')
const { User } = require('./user')
const Score = require('./score')

const Class = sequelize.define('class', {
    maLop: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    room: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lecturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dow: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    begin: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    end: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    dateBegin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateEnd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    finish: {
        type: Sequelize.TINYINT,
        allowNull: false
    }

})

const insertClass = async (data) => {
    try {
        const newClass = await Class.create({
            ...data
        })
        return newClass
    } catch (err) {
        throw new Error(err)
    }
}

const getAllClasses = async () => {
    try {
        return await Class.findAll()
    } catch (err) {
        throw new Error(err)
    }
}

const getClassesById = async (id, dow) => {
    try {
        const listEnrollment = await getAllEnrollmentsByUserId(id)
        const result = []
        for (let i = 0; i < listEnrollment.length; i++) {
            const classData = await Class.findOne({
                where: {
                    maLop: listEnrollment[i].classMaLop,
                    dow
                }
            })
            if (classData) {
                const course = await Course.findOne({ where: { maMon: classData.maMon } })
                classData.dataValues['courseName'] = course.name
                result.push(classData)
            }

        }
        if (result) return result
    } catch (err) {
        throw new Error(err)
    }
}

const getTestById = async (data, id) => {

    try {
        const listEnrollment = await getEnrollmentsBySemester(data, id)
        const result = []
        for (let i = 0; i < listEnrollment.length; i++) {
            const classData = await Class.findOne({
                where: {
                    maLop: listEnrollment[i].classMaLop
                }
            })
            if (classData) {
                const course = await Course.findOne({
                    where: {
                        maMon: classData.maMon
                    }
                })
                let testByClass = await getAllTestsByClassId(listEnrollment[i].classMaLop)
                // testByClass.dataValues['courseName'] = course.name
                testByClass.forEach((test) => {
                    test.dataValues['courseName'] = course.name
                    result.push(test)
                })
            }
        }

        if (result) return result
    } catch (err) {
        throw new Error(err)
    }
}

const finishClass = async (data, maLop) => {
    try {
        const enrollment = await Enrollment.findOne({ where: { classMaLop: maLop } })
        const score = await Score.getScoreById(enrollment.id)
        const classData = await Class.findOne({ where: { maLop: enrollment.classMaLop } })
        const course = await Course.findOne({ where: { maMon: classData.maMon } })
        const user = await User.findOne({ where: { id: enrollment.userId } })
        if (score.total >= 5) {
            user.accumulatedCredits += course.credits
            if (user.totalScore === 0 && user.accumlatedScore === 0) {
                user.totalScore = score.total
                user.accumlatedScore = score.total
            } else {
                user.totalScore = ((user.totalScore * user.accumulatedCredits) + score.total * course.credits) / (course.credits + user.accumulatedCredits)
                user.accumlatedScore = ((user.accumlatedScore * user.accumulatedCredits) + score.total * course.credits) / (course.credits + user.accumulatedCredits)
            }
            user.save()
        }
        const result = await Class.update(
            {
            ...data
            },
            {
                where: {
                    maLop: maLop
                }
            }
        )
        if (result) return result
    } catch (err) {
        throw new Error(err)
    }
}

const getScoreBySemester = async (data, id) => {
    try {
        const listEnrollment = await getEnrollmentsBySemester(data, id)
        const result = []
        for (let i = 0; i < listEnrollment.length; i++) {
        const classData = await Class.findOne({
            where: {
            maLop: listEnrollment[i].classMaLop
            }
        })
        if (classData) {
            const course = await Course.findOne({
              where: {
                maMon: classData.maMon
              }
            })


            const scoreList = await Score.getScoreById(listEnrollment[i].id)
            if (scoreList) {
                scoreList.dataValues['maMh'] = course.maMon
                scoreList.dataValues['maLop'] = classData.maLop
                scoreList.dataValues['credits'] = course.credits
                result.push(scoreList)
            }

        }
        }

        if (result) return result
    } catch (err) {
        throw new Error(err)
    }
}

Class.belongsToMany(User, { through: { model: Enrollment, unique: false } })
User.belongsToMany(Class, { through: { model: Enrollment, unique: false } })


Class.belongsTo(Course, {
    foreignKey: 'maMon',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})




Test.belongsTo(Class, {
    foreignKey: 'maLop',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})


module.exports = {
    Class,
    insertClass,
    getAllClasses,
    getClassesById,
    getTestById,
    finishClass,
    getScoreBySemester
}