const express = require('express');
const cors = require('cors');

const messageRoute = require('./routes/message.route');
const skillsRoute = require('./routes/skills.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', messageRoute)
app.use('/api', skillsRoute)

module.exports = app;