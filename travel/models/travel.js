var mongoose = require('mongoose');

var TravelSchema = new mongoose.Schema({
  destination: String,
  duration:  Number,
  activities: [{
	  destination: String,
	  day: Number,
	  name: String,
	  length: Number,
	  address: String,
	  description: String,
	  image: String
  		}]
});

module.exports = mongoose.model('Travel', TravelSchema);
