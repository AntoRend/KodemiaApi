const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// /koders/
router.get('/', async (req, res) => {
  const allKoders = await koders.getAll()
  res.json({
    message: 'All koders',
    data: {
      koders: allKoders
    }
  })
})

router.post('/', async (req, res) => {
  const newKoder = {
    name: req.body.name,
    generation: req.body.generation,
    email: req.body.email,
    password: req.body.password
    /* name: 'test',
    generation: 7,
    email: 'test@test.test',
    password: 'testest' */
  }
  const newKoderCreated = await koders.create(newKoder)
  res.json({
    message: 'New koder created',
    data: {
      koder: newKoderCreated
    }
  })
})

module.exports = router
