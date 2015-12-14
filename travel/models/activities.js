var mongoose = require('mongoose');

var ActivitiesSchema = new mongoose.Schema({
  destination: String,
  day: Number,
  name: String,
  length: Number,
  address: String,

});

module.exports = mongoose.model('Activities', ActivitiesSchema);
