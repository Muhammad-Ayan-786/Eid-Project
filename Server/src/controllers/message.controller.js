const messageModel = require('../model/message.model');

// Send Message
async function message(req, res) {
  const body = req.body

  const userMessage = await messageModel.create({
    message: body.message
  })

  res.status(201).json({
    success: true,
    message: userMessage
  })
}

// Get All Messages
async function getMessages(req, res) {
  const allMessages = await messageModel.find()

  res.status(200).json({
    success: true,
    allMessages
  })
}

module.exports = { message, getMessages }