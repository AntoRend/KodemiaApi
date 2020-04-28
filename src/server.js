const express = require('express')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')

const app = express()

app.use(express.json())
// montamos el router koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

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
