const Joi = require('@hapi/joi')

const schemaPlayer = Joi.object({
  login: Joi.string()
    .alphanum()
    .min(3)
    .max(15).required(),
  password: Joi.string()
    .alphanum()
    .min(4)
    .max(20).required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2
  }).required()
})

module.exports = schemaPlayer
