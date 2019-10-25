const express = require('express')
const router = express.Router()
const sha1 = require('sha1')
const service = require('../service/player')
const mapper = require('../mapper/player')
const schemaPlayer = require('./joi/player')
var randtoken = require('rand-token')
const middleWare = require('../middleWare')

router.put('/', async (req, res) => {
  try {
    const value = await schemaPlayer.validateAsync(req.body)
    const dataPlayer = {
      ...value,
      password: sha1(value.password)
    }
    const player = await service.create(dataPlayer)
    return res.json({ done: true, player: mapper(player) })
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message })
  }
})

router.put('/signin', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      throw new Error('invalid-request')
    }
    const player = await service.findByMail({ email })
    if (!player) {
      throw new Error('wrong mail')
    }
    if (player.password !== sha1(password)) {
      throw new Error('wrong password')
    }
    const token = randtoken.generate(16)
    await service.addToken({ email, token })
    return res.json({ done: true, token: token })
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const { email } = req.query
    if (!email || email === '') {
      const players = await service.list()
      return res.json({
        done: true,
        players: players.map(player => mapper(player))
      })
    }
    const player = await service.findByMail({ email })
    if (!player) {
      throw new Error('Player not found')
    }
    return res.json({ done: true, player: mapper(player) })
  } catch (err) {
    return res.status(400).json({ done: false, error: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { email } = req.query
    const { score } = req.body
    if (!email || email === '') {
      throw new Error('invalid-request')
    }
    if (!score) {
      throw new Error('invalid-request')
    }

    const player = await service.update(email, { score })
    return res.json({ done: true, player: mapper(player) })
  } catch (err) {
    return res.status(400).json({ done: false, error: err.message })
  }
})

router.delete('/', middleWare(), async (req, res) => {
  try {
    const { email } = req.body
    if (!email) {
      throw new Error('invalid-request')
    }
    await service.remove({ email })
    return res.json({ done: true })
  } catch (err) {
    return res.status(400).json({ done: false, error: err.message })
  }
})

module.exports = router
