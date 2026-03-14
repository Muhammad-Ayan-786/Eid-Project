const express = require('express');
const messageController = require('../controllers/message.controller');

const router = express.Router();

// /api/message
router.post('/message', messageController.message)

// /api/get/messages
router.get('/get/messages', messageController.getMessages)

module.exports = router;