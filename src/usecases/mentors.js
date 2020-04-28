const mentor = require('../models/mentors')

async function getAll () {
  const allMentors = await mentor.find()
  return allMentors
}

async function create (mentorData) {
  const mentorCreated = await mentor.create(mentorData)
  return mentorCreated
}

module.exports = {
  getAll,
  create
}
