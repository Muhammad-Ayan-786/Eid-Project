const { Schema, model } = require('mongoose');

const messageScema = new Schema({
  message: {
    type: String,
    required: true
  }
});

const messageModel = model('messages', messageScema);

module.exports = messageModel;