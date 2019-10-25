const mongoose = require('mongoose')

const schemaPlayer = new mongoose.Schema(
  {
    login: String,
    password: String,
    name: String,
    surname: String,
    email: {
      type: String,
      unique: true
    },
    score: {
      type: Number,
      default: 0
    },
    tokens: {
      type: Array
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Player', schemaPlayer)
