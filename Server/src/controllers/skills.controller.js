const skillsModel = require('../model/skills.model');
const { uploadIcon } = require('../services/storage.service');

// Create Skill
async function skills(req, res) {
  const { title, description } = req.body
  const file = req.file

  const result = await uploadIcon(file.buffer.toString('base64'));

  const skill = await skillsModel.create({
    title,
    description,
    url: result.url
  })

  res.status(201).json({
    success: true,
    skill: skill
  })
}

// Get All Skills
async function getSkills(req, res) {
  const allSkills = await skillsModel.find()

  res.status(200).json({
    success: true,
    allSkills
  })
}

module.exports = { skills, getSkills }