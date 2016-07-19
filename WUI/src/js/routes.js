var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
// var Login = require('./pages/Login/Login');
var MyApp = require('./components/MyApp');
var HomePage = require('./components/Home');
// var ViewMovieBox = require('./components/ViewMovieBox');

// var  LoginRequired  = require('./utils/RouteHelpers');

module.exports = (
<Route>

        <Route handler={Master}>
            <DefaultRoute handler={Home} name="Home"/>
        </Route>
        <Route handler={HomePage} name="HomePage" path="/home"/>
        <Route handler={MyApp} name="weatherapp" path="/weather/*"/>
    </Route>

);
