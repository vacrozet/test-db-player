const { describe, it, after } = require('mocha')
// const { assert } = require('chai')
const request = require('supertest')
const mongoose = require('mongoose')
const { app } = require('../app')

describe('Test Player', function () {
  after(() => {
    mongoose.disconnect()
  })
  it('Should render error', function (done) {
    request(app)
      .post('/player').expect(404, done)
  })
})
