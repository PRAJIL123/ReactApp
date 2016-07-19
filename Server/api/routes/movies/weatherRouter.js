var Weather = require('../../../models/movies/weatherModel');
var config=require('../../../config/config.json');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var request = require('request');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));
// app.set('superSecret', config.secret);
var router = express.Router();

//...................................Getting All weather.....................
router.get('/weather', function(req, res) {
  Weather.find(function(err, weathers) {
    if(err){
      return res.send("No updates to show");
    }

    res.json(weathers);
 });
});

// //..................................Adding a new weather.....................
//   router.post('/weatherAdd',function(req, res) {
//     var weather = new Weather(req.body);
//     weather.save(function(err) {
//     if(err) {
//       return res.send("Data not added");
//     }
//
//     res.send("data added succesfully"+weather);
//
//   });
// });

//..................................Adding a new weather from openweather.....................
  router.post('/weather',function(req, res, next) {
    var cityname = req.body.name;
    console.log(cityname);
    var cityurl = "http://api.openweathermap.org/data/2.5/weather/?q="+cityname+"&APPID=3c31b0850f14517f09156e0a69401fa3";
    console.log(cityurl);

    request(cityurl, function(err,resp,body){
      body = JSON.parse(body);

      console.log(body);
      var obj = new Weather(body);

      obj.save(function(err) {
        if(err)
          console.log(err);
          res.send("Weather not present");
      });
      res.send(obj.name + " Inserted Successfully");
    });

  });

// //.................................deleting a weather..................................
// router.delete('/deleteWeather/:id', function(req, res) {
//   Weather.remove({
//     _id: req.params.id
//   }, function(err, weather) {
//       if(err) {
//         res.send("Weather id not exist");
//       }
//
//       res.json(weather);
//
//   });
// });
//
// //.................................Updating weather..............................
// router.put('/updateWeather/:id', function(req, res) {
//   Weather.findOne({ _id: req.params.id}, function(err, weather) {
//     if(err) {
//       return res.send("Weather id not exist, not possible to update");
//     }
//
//     for(prop in req.body) {
//       weather[prop] = req.body[prop];
//     }
//
//     //save the weather
//     weather.save(function(err) {
//       if(err) {
//         return res.send("data not possible to save");
//       }
//
//       res.json(weather);
//     });
//   });
// });
//
//.......................................Getting a single weather....................
router.get('/weather/:id', function(req, res) {
  Weather.findOne({ _id: req.params.id}, function(err, weather) {
    if(err) {
      return res.send("weather id not exist");
    }

    res.json(weather);
  });
});


module.exports = router;
