var React = require('react');
var Link = require('react-router').Link;


var Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar-fixed-top">
                <div className="container">
                    <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="nav-collapse collapse navbar-responsive-collapse">
                        <ul className="nav navbar-nav">

                            <li className="active"><Link to="/home">Home</Link></li>
                        </ul>
                            <a className="navbar-brand" href="/"><span className='glyphicon glyphicon-cloud'> Weather</span></a>

                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Navbar;
