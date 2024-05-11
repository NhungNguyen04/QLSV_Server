const Score = require('~/models/score')

exports.insertScore = async (req, res, next) => {
  try {
    const result = await Score.insertScore(req.body)
    if (result) res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

exports.getScoreById = async (req, res, next) => {
  try {
    const result = await Score.getScoreById(req.params.id)
    if (result) res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}
