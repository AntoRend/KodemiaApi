const Koder = require('../models/koders')

// los casos de uso son las accoines que puede ejercer un usuario en el sistema

async function getAll () {
  const allKoders = await Koder.find()
  return allKoders
}

async function create (koderData) {
  const koderCreated = await Koder.create(koderData)
  return koderCreated
}

module.exports = {
  getAll,
  create
}

/*
getAll()
  .then(koders => {
    console.log('koders:', koders)
  })
  .catch(error => console.error('ERROR:', error))
*/
