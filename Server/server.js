var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 var movie = require('./api/routes/movies/movie');

//........................weather router calling..........................
 // var weather = require('./api/routes/movies/weatherRouter');

var config=require('./config/config.json');
var path = require('path');
var jwt = require('jsonwebtoken');
var router = express.Router();
// var movie = require('./models/movies/movie');

//Get the instance of express app
var app = express();

//Assign body-parser to the app for getting the post data from req body
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('superSecret', config.secret);
app.use('/', express.static(path.join(__dirname, '../WUI/dist/')));

//Connect to Mongo Database, If custom connections are not made then this connection will be shared across all models
mongoose.connect(config.DatabaseURL);


// assign the mongoose connection to a variable
var db = mongoose.connection;

//Verify the connection status with the database
db.on('error', console.error.bind(console,'Connection error ...!!!!!'));
db.once('open',function(){
  console.log("Connected to MongoDB successfully");
})

// API ROUTES -------------------
// get an instance of the router for api routes
//router.route('/user/authenticate/:email/:password')
// route to authenticate a user (POST http://localhost:8080/api/authenticate)
app.get('/user/authenticate/:email/:password',function(req, res){

   if ('admin@gmail.com' != req.params.email)
   {
       res.json({ success: false, message: 'Authentication failed. User not found.' });
   }
   else if ('admin' != req.params.password)
   {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
     }
     else
     {
       var token = jwt.sign('user', app.get('superSecret'),
       {
         //expiresInMinutes: 1440 // expires in 24 hours
       });
         res.json(
       {
         success: true,
         message: 'Enjoy your token!',
         token: token
       });
     }
 });

// Assign /Api as the root of the application
  app.use('/api', movie);

//....................calling weather api..........
 // app.use('/weatherurl',weather);



var port = config.port;

//instantiate the server at the specified port
app.listen(port, function(){
  console.log("Server started at port :"+port);
});
