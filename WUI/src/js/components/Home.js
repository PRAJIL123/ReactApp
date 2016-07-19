var React = require('react');
var Navbar = require('./Navbar');

//Home Component
var Home = React.createClass({
    render: function() {
        return (
            <div className="well">
            <Navbar />

                  <div className="page-header">
                    <h1>Weather ForeCast</h1>
                  </div>
            </div>
        );
    }
});

module.exports = Home;
