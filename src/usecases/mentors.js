const mentor = require('../models/mentors')

function getAll () {
  return mentor.find()
}

function create (mentorData) {
  return mentor.create(mentorData)
}

function deleteById (id) {
  return mentor.findByIdAndDelete(id)
}

function updateById (id, newKoderData) {
  return mentor.findByIdAndUpdate(id, newKoderData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
