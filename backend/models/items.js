const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Item', itemSchema);
