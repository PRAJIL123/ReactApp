var React = require('react');
var Navbar = require('./Navbar');
// var ReactDOM = require('react-dom');
// var SingleMovie = require('./SingleMovie');

var Display = React.createClass({

  getInitialState: function() {
      return {
          data: []
      }
  },

  search: function(URL){
    $.ajax({
     url: "http://localhost:8080/weatherurl/singleWeather/578c9dd9203673ce13670173",
     dataType: 'json',
     type: 'GET',
     data: this.state,
     success: function(data) {
       console.log(data);
       console.log('saved');

     }.bind(this),
     error: function(xhr, status, err) {
       console.error("http://localhost:8080/weatherurl/singleWeather/578c9dd9203673ce13670173", status, err.toString());
     }.bind(this)
   });
  },


  render: function(){
      return (
          <div>
              <SearchBox search={this.search} />

          </div>
      );
  },

});

  var SearchBox = React.createClass({

  render: function(){
    return(
      <div className="movieBox">
      <Navbar />
        <div>
          <div className = "well">
            <div className = "container">
              <div id="maintext"><h1><u><center>WEATHER APP</center></u></h1></div><br/>
                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-10">

                  <input type="text" ref="query" className="form-control" />
                  <input type="submit" onClick={this.createAjax} className="btn btn-success"/>
                  <textarea id="txtarea" rows="30" cols="50"/> <br></br>

                      <h3><a href="http://api.openweathermap.org/data/2.5/weather/?q=Bangalore&APPID=3c31b0850f14517f09156e0a69401fa3">Bangalore</a></h3><br/>

                      <h3><a href="url">Chennai</a></h3><br/>

                      <h3><a href="url">Pune</a></h3><br/>

                      <h3><a href="url">Delhi</a></h3><br/>

                      <h3><a href="url">Kochi</a></h3><br/>

                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  },

  createAjax: function(){

      var query = React.findDOMNode(this.refs.query).value;
      console.log(query);
      var URL  = 'http://api.openweathermap.org/data/2.5/weather/?q='+ query + '&APPID=3c31b0850f14517f09156e0a69401fa3';
      console.log(URL);
      this.props.search(URL)
  }

});

module.exports=Display;
