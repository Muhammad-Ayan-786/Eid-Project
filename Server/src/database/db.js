const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DataBase Conntect Succussfully');
  } catch (error) {
    console.log("Error from Database", error);
  }
}

module.exports = connectToDB;