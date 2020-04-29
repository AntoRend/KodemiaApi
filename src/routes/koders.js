const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// /koders/
router.get('/', async (req, res) => {
  try {
    const allKoders = await koders.getAll()
    res.json({
      message: 'All koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    const errorsArray = Object.entries(error.errors)
      .map(([key, value]) => {
        return { [key]: value.message }
      })
    res.json({
      success: false,
      error: error.message,
      // error: error.errors,
      errorsArray
    })
  }
})

/*
router.post('/', async (req, res) => {
  const newKoder = {
    name: req.body.name,
    generation: req.body.generation,
    email: req.body.email,
    password: req.body.password
  // name: 'test',
  //  generation: 7,
  //  email: 'test@test.test',
  //  password: 'testest'
  }
  const newKoderCreated = await koders.create(newKoder)
  res.json({
    message: 'New koder created',
    data: {
      koder: newKoderCreated
    }
  })
})
*/

router.post('/', async (req, res) => {
  try {
    const newKoder = await koders.create(req.body)
    res.json({
      message: 'koder created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    const errorsArray = Object.entries(error.errors)
      .map(([key, value]) => {
        return { [key]: value.message }
      })
    res.json({
      success: false,
      error: error.message,
      // error: error.errors,
      errorsArray
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koderDeleted = await koders.deleteById(id)
    res.json({
      success: true,
      message: `koder with id ${id} deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koderUpdated = await koders.updateById(id, req.body)
    res.json({
      success: true,
      message: `koder with id ${id} updated`,
      data: {
        koderUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router

// try-catch
