const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allMentors = await mentors.getAll()
    res.json({
      message: 'All Mentors',
      data: {
        koders: allMentors
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

router.post('/', async (req, res) => {
  try {
    const newMentor = await mentors.create(req.body)
    res.json({
      message: 'Mentor created',
      data: {
        koder: newMentor
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const mentorDeleted = await mentors.deleteById(id)
    res.json({
      success: true,
      message: `Mentor with id ${id} deleted`,
      data: {
        koder: mentorDeleted
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
    const mentorUpdated = await mentors.updateById(id, req.body)
    res.json({
      success: true,
      message: `Mentor with id ${id} updated`,
      data: {
        mentorUpdated
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
