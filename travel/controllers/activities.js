var express = require('express');
var Activities = require('../models/activities');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Activities.find(function(err, activities) {
      if (err) return res.status(500).send(err);
      res.send(activities);
    });
  })
  .post(function(req, res) {
    Activities.create(req.body, function(err, activities) {
      if (err) return res.status(500).send(err);
      res.send(activities);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Activities.findById(req.params.id, function(err, activities) {
      if (err) return res.status(500).send(err);
      res.send(activities);
    });
  })
  .put(function(req, res) {
    Activities.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
 
module.exports = router;