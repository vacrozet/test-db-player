module.exports = {
  put: {
    tags: [
      'Player'
    ],
    summary: 'Add player',
    description: '',
    operationId: 'addPlayer',
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
            'login',
            'password',
            'name',
            'surname',
            'email'
          ],
          properties: {
            login: {
              type: 'string'
            },
            password: {
              type: 'string'
            },
            name: {
              type: 'string'
            },
            surname: {
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
  },
  post: {
    tags: [
      'Player'
    ],
    summary: 'Update score of player',
    description: 'For update score of player',
    consumes: [
      'application/json'
    ],
    produces: [
      'application/xml'
    ],
    parameters: [
      {
        name: 'email',
        in: 'query',
        description: 'Email player',
        required: true,
        schema: {
          type: String,
          defualt: 'coucou'
        }
      },
      {
        name: 'Body',
        in: 'body',
        description: 'Body for update score of player',
        required: true,
        schema: {
          type: Object,
          required: [
            'score'
          ],
          properties: {
            score: {
              type: 'number'
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
  },
  get: {
    tags: [
      'Player'
    ],
    summary: 'Get player(s)',
    description: 'If you send request without query parameters named mail you get all players',
    consumes: [
      'application/json'
    ],
    produces: [
      'application/xml'
    ],
    parameters: [
      {
        name: 'email',
        in: 'query',
        description: 'Email player',
        required: false,
        schema: {
          type: String
        }
      }
    ],
    responses: {
      200: {
        description: 'successful operation'
      },
      400: {
        description: 'Player(s) not found'
      }
    }
  },
  delete: {
    tags: [
      'Player'
    ],
    summary: 'For delete player',
    description: 'This route use middleware for check token, (token received by route signin)',
    consumes: [
      'application/json'
    ],
    produces: [
      'application/xml'
    ],
    parameters: [
      {
        in: 'header',
        name: 'token',
        required: true,
        schema: {
          type: String
        }
      },
      {
        in: 'body',
        name: 'Body',
        required: true,
        schema: {
          type: Object,
          required: [
            'email'
          ],
          properties: {
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
