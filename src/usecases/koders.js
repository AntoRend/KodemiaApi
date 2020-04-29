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

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}

/*
getAll()
  .then(koders => {
    console.log('koders:', koders)
  })
  .catch(error => console.error('ERROR:', error))
*/
