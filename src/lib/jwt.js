const jwt = require('jsonwebtoken')

// abstrae la palabra secreta y la implementa en los metodos
const secret = 'supersecretword'

function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

function verify (token = '') {
  return jwt.verify(token, secret)
}

// exporta toda la libreria de jwt sustituyendo sign y verify a los metodos modificados
module.exports = {
  ...jwt,
  sign,
  verify
}
