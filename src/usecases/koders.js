const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const Koder = require('../models/koders')

// los casos de uso son las accoines que puede ejercer un usuario en el sistema

function getAll () {
  return Koder.find()
}

function create (koderData) {
  return Koder.create(koderData)
}

function deleteById (id) {
  return Koder.findByIdAndDelete(id)
}

function updateById (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

//
// 1.- Validar la existencia
// 2.- crear el hash encriptado del password
// 3.-cremos el koder
async function signup (newKoderData) {
  const { email, password } = newKoderData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('password is required')

  const koderAlreadyExist = await Koder.findOne({ email })

  // if inline
  if (koderAlreadyExist) throw new Error('Email is already registered')
  if (password.length < 6) throw new Error('Password must be 6 characters minimun')
  // crear el hash
  const hash = await bcrypt.hash(password, 10)

  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, koder.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: koder._id })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  signup,
  login
}

/*
getAll()
  .then(koders => {
    console.log('koders:', koders)
  })
  .catch(error => console.error('ERROR:', error))
*/
