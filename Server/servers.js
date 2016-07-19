var express=require('express');
var app=express();
var router=require('./api/routes/movies/weatherRouter');
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/citydb');
mongoose.set("debug", true);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
extended: true
}));app.use('/', router);
app.listen(8080, function(){
 console.log('listening port 8080...');
});
