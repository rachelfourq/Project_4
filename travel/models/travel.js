var mongoose = require('mongoose');

var TravelSchema = new mongoose.Schema({
  destination: String,
  duration:  Number,
  activities: [
  		{
  			activity: {type: mongoose.Schema.Types.ObjectId, ref: 'Activities'}
  		}
  		]
});

module.exports = mongoose.model('Travel', TravelSchema);
