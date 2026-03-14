const express = require('express');
const multer = require('multer');

const skillsController = require('../controllers/skills.controller');

const router = express.Router();

const uploadIcon = multer({
  storage: multer.memoryStorage()
})

// /api/skills
router.post('/skills', uploadIcon.single('icon'), skillsController.skills)

// /api/get/skills
router.get('/get/skills', skillsController.getSkills)

module.exports = router;