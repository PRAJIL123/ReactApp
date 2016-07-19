var express = require('express');
var router = express.Router();
var imdbObj = require('node-movie');
// var jwt = require('jsonwebtoken');
var Movie = require('../../../mymodels/movies/movie');
// var config=require('../../../config/config.json');
var app = express();


// var Movie = require('../model/movieModel');
var express = require('express');
var mongoose = require('mongoose');
// var router = express.Router();

//...................................Getting All Movies.....................
router.get('/movieAll', function(req, res) {
  Movie.find(function(err, movies) {
    if(err){
      return res.send("No movie to show");
    }

    res.json(movies);
 });
});

//..................................Adding a new Movie.....................
  router.post('/movieAdd',function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err) {
    if(err) {
      return res.send("Data not added");
    }

    res.send("data added succesfully"+movie);

  });
});

//.................................deleting a movie..................................
router.delete('/deleteMovie/:id', function(req, res) {
  Movie.remove({
    _id: req.params.id
  }, function(err, movie) {
      if(err) {
        res.send("Movie id not exist");
      }

      res.json(movie);

  });
});

//.................................Updating movie..............................
router.put('/updateMovie/:id', function(req, res) {
  Movie.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("Movie id not exist, not possible to update");
    }

    for(prop in req.body) {
      movie[prop] = req.body[prop];
    }

    //save the movie
    movie.save(function(err) {
      if(err) {
        return res.send("data not possible to save");
      }

      res.json(movie);
    });
  });
});

//.......................................Getting a single movie....................
router.get('/singleMovie/:id', function(req, res) {
  Movie.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("movie not exist");
    }

    res.json(movie);
  });
});


module.exports = router;
