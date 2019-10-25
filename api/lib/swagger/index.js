const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const player = require('./player.js')
const playerSignin = require('./playerSignin')

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Player',
      version: '1.0.0',
      description: 'Documentation API Player'
    },
    host: 'localhost:3005',
    tags: [
      {
        name: 'Player',
        description: 'Route for Player',
        externalDocs: {
          description: 'player'
        }
      }
    ],
    paths: {
      '/player': player,
      '/player/signin': playerSignin
    }
  },
  apis: ['./app.js']
}

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(specs))
}
