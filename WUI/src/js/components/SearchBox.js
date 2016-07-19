var React = require('react');
var Navbar = require('./Navbar');
var SingleMovie = require('./SingleMovie');

var SearchBox = React.createClass({


  createAjax: function(){
      var query = React.findDOMNode(this.refs.query).value;
      var data = {
        q: query
      };
      var URL = 'http://openweathermap.org/find?q=';
      var myResults = [];
      var self = this;

      $.get(URL, data)
        .done(function(data) {

          var actualData = data.Search;
          actualData.forEach(function(movie){

            //console.log(movie);
            myResults.push(<SingleMovie title={movie.Title}  year={movie.Year} imdbid={movie.imdbID} poster={movie.Poster} />);
          });
          self.setState({
            data: myResults
          });
        });
  },

  getInitialState: function(){
      return {
        data: ''
      }
  },

  render: function(){
    return(
      <div className="movieBox">
      <Navbar />
      <div>
      <div className = "well">
      <div className = "container">
          <div id="maintext"><center>MOVIE APP</center></div><br/>
          <input type="text" ref="query" className="form-control" placeholder="Movie Name"/>
      <div className="form-group">
      <div className="col-sm-offset-4 col-sm-10">
          <input type="submit" onClick={this.createAjax} id="btn_omdb" className="btn btn-info" value="Search"/><br/><br/>
      </div>
          {this.state.data}

      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
});

module.exports=SearchBox;
