const express = require('express')

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
// const authMiddleware = require('./Middlewares/auth')

const app = express()

// Middleware
// Parsea cada request a json, solo en caso de que contenga
// el header content-type con valor 'application/json'
// toma el body y lo transforma en un json que nos lo entrega
// en el objeto request.body
app.use(express.json())

// middleware global (afecta a toda la aplicacion)
app.use((req, res, next) => {
  console.log(`> [${req.method}] ${req.url} body: ${JSON.stringify(req.body)}`)
  console.log('> Middleware in app')
  next()
})

// app.use(authMiddleware)

// montamos el router koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)

// todos los recursos se escriben en plural

// mismo recurso
// GET /Koders
// POST /Koders
// PATCH /Koders:id
// DELETE /Koders:id

// router yo lo puedo montar en la ruta que quiero
// router se montara /koders
// GET / -> GET /koders
// POST / -> POST /koders
// PATCH /:id -> PATCH /koders/:id

module.exports = app
