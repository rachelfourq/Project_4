var mongoose = require('mongoose');

var TravelSchema = new mongoose.Schema({
  destination: String,
  duration: Number,
  image: String
});

module.exports = mongoose.model('Travel', TravelSchema);
