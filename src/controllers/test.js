const Test = require('~/models/test')

exports.insertTest = async (req, res, next) => {
  try {
    const newTest = await Test.insertTest(req.body)
    if (newTest) res.status(201).json(newTest)
  } catch (err) {
    next(err)
  }
}

exports.getAllTestsByClassId = async (req, res, next) => {
  try {
    const allTestsByClassId = await Test.getAllTestsByClassId(req.params.classId)
    if (allTestsByClassId) res.status(200).json(allTestsByClassId)
  } catch (err) {
    next(err)
  }
}