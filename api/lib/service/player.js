const Player = require('../model/player')

module.exports = {
  get: async id => {
    const player = await Player.findById(id)
    return player
  },
  findByMail: async email => {
    const player = await Player.findOne(email)
    return player
  },
  list: async () => {
    const players = await Player.find()
    return players
  },
  create: async values => {
    const player = new Player(values)
    await player.save()
    return player
  },
  update: async (email, values) => {
    const player = await Player.findOne({ email })
    player.set(values)
    await player.save()
    return player
  },
  remove: async (email) => {
    const player = await Player.findOne(email)
    await player.remove()
  },
  addToken: async ({ email, token }) => {
    const player = Player.updateOne(
      { email: email },
      { $push: { tokens: token } }
    )
    return player
  }
}
