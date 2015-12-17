var mongoose = require('mongoose');

var ActivitiesSchema = new mongoose.Schema({
  destination: String,
  day: Number,
  name: String,
  length: Number,
  address: String,
  description: String,
  image: String

});

module.exports = mongoose.model('Activities', ActivitiesSchema);
