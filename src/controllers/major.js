const { addMajor, detailMajor } = require('~/models/major')

exports.addMajor = async (req, res, next) => {
  try {
    const newMajor = await addMajor(req.body)
    if (newMajor) res.status(201).json(newMajor)
  } catch (err) {
    next(err)
  }
}

exports.detailMajor = async (req, res, next) => {
  try {
    const major = await detailMajor(req.params.id)
    if (major) res.status(200).json(major)
  } catch (err) {
    next(err)
  }
}