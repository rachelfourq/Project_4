var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Travel = require('./models/travel');
var activities = require('./models/activities')

mongoose.connect('mongodb://localhost/*');
// mongoose.connect('mongodb://localhost/activities');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/travels', require('./controllers/travel'));
app.use('/api/activities', require('./controllers/activities'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);
