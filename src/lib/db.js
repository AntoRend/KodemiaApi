const mongoose = require('mongoose')

const db_user = 'ltonnito'
const db_Password = 'Kodemia123'
const db_host = 'kodemiaseptimag-bnup1.mongodb.net'
const db_name = 'Kodemia'
// protocolo = mongodb+srv://
const url = `mongodb+srv://${db_user}:${db_Password}@${db_host}/${db_name}`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
  connect
}

// del otro lado...
// const db = require ('...db.js')
// db() --> asi si exportamos directo la funcion

// db.connect()
