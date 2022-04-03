const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/f8_education_dev');
    console.log('Connected successfully');
  } catch (error) {
    console.log('Connection failed');
  }
}

module.exports = { connect };
