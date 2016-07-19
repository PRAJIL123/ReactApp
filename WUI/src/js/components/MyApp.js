var React = require('react');
var Navbar = require('./Navbar');
// var SearchBox = require('./SearchBox');
var MyCities = require('./MyCities');

var MyApp = React.createClass({
    render: function(){
        return (
            <div>
                <MyCities/>
            </div>
        );
    },
});

module.exports=MyApp;
