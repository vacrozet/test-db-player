const service = require('./service/player')

module.exports = () => {
  return async (req, res, next) => {
    const { email } = req.body
    const player = await service.findByMail({ email })
    if (!player) {
      return res.status(400).json({ done: false, result: 'user not found' })
    } else if (player.tokens.indexOf(req.headers.token) < 0) {
      return res.status(400).json({ done: false, result: 'token not found' })
    } else {
      next()
    }
  }
}
