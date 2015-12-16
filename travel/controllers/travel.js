var express = require('express');
var Travel = require('../models/travel');
var Activities = require('../models/activities')
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Travel.find(function(err, travels) {
      if (err) return res.status(500).send(err);
      res.send(travels);
    });
  })
  .post(function(req, res) {
    Travel.create(req.body, function(err, travel) {
      if (err) return res.status(500).send(err);
      res.send(travel);
  });
});

router.route('/:id')
  .get(function(req, res) {
    Travel.findById(req.params.id, function(err, travel) {
      if (err) return res.status(500).send(err);
      res.send(travel);
    });
  })
  .put(function(req, res) {
    Travel.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Travel.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
  });
});

router.route('/:id/activities/:activity')
  .get(function(req, res) {
    console.log('travel')
    Travel.findById(req.params.id, function(err, travel) {
      console.log('inside travel')
      if (err) return res.status(500).send(err);
      res.send(travel);
  });
})
  .post(function(req, res) {
    console.log('working')
    Travel.findById(req.params.id, function(err, travel) {
      Activities.findById(req.params.activity, function(err, activity) {
        travel.activities.push(activity);
        travel.save(function(err) {
          if (err) return res.status(500).send(err);
          res.send({'message': 'success'});
        });
      });
  });
});

module.exports = router;
