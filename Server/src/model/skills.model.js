const { Schema, model } = require('mongoose');

const skillsSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const skillsModel = model('skills', skillsSchema);

module.exports = skillsModel;