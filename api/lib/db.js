const Mongoose = require('mongoose')
const config = require('../config/default')

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  user: config.user,
  pass: config.pass
}
Mongoose.connect('mongodb://mongo:27017/game', options).catch(err => {
  console.log(err)
})

require('./model/player')
