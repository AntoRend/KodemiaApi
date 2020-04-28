const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (req, res) => {
  const allMentors = await mentors.getAll()
  res.json({
    message: 'All Mentors',
    data: {
      mentors: allMentors
    }
  })
})

router.post('/', async (req, res) => {
  const newMentor = {
    name: req.body.name,
    class: req.body.class,
    email: req.body.email,
    password: req.body.password
    /* name: 'test',
    generation: 7,
    email: 'test@test.test',
    password: 'testest' */
  }
  const newMentorCreated = await mentors.create(newMentor)
  res.json({
    message: 'New Mentor created',
    data: {
      mentor: newMentorCreated
    }
  })
})

module.exports = router
