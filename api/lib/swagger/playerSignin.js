module.exports = {
  put: {
    tags: [
      'Player'
    ],
    summary: 'Signin player',
    description: 'This route return token for delete player',
    consumes: [
      'application/json'
    ],
    produces: [
      'application/xml'
    ],
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'body player',
        required: true,
        schema: {
          type: Object,
          required: [
            'password',
            'email'
          ],
          properties: {
            password: {
              type: 'string'
            },
            email: {
              type: 'string'
            }

          }
        }
      }
    ],
    responses: {
      200: {
        description: 'successful operation'
      },
      400: {
        description: 'Invalid input'
      }
    }
  }
}
