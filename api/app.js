const conf = require('./config/default')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerDoc = require('./lib/swagger/index')

require('./lib/db.js')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/player', require('./lib/controller/player'))

swaggerDoc(app)
const listen = () => {
  app.listen(conf.port, conf.hostname, () => {
    console.log(
      'Running on http://' + conf.hostname + ':' + conf.port
    )
  })
}

module.exports = {
  app,
  listen
}
