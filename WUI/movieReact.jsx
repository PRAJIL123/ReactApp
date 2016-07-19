var SingleMovie = React.createClass({

  render: function(){
    return (
      <div className="row" id="features">

        <div className="col-sm-4 feature">
          <img src={this.props.poster}/> &nbsp; &nbsp;
          <hr/>
        </div>

        <div className="col-sm-4 feature">
          <h2><u>{this.props.title}</u></h2>
          <h4>Year: {this.props.year}</h4>
        </div>

        <div className="col-sm-4 feature">
          <br/><br/><input type="submit" className="btn btn-success" value="Add" data-target={"#myModal" + this.props.imdbid} data-toggle="modal"/>
        </div>

        <div className="modal fade" id={"myModal" + this.props.imdbid} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <div class="modal-header">
                <button className="close" data-dismiss="modal">&times;</button>
                <center><h1 className="modal-title">{this.props.title} </h1></center><hr/>
              </div>

              <div className="modal-body">

                <div className="row" id="features">

                  <div className="col-sm-6 feature">
                    <img src={this.props.poster} height="300" width="250"/>
                  </div>

                  <div className="col-sm-6 feature">
                    <h3><u>Title: {this.props.title}</u></h3>
                    <h4>Year: {this.props.year}</h4>
                    <h4>Movie Id: {this.props.imdbid}</h4>
                  </div>

                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-success" type="submit">Save </button>
                <button className="btn btn-default" data-dismiss="modal" type="button">Cancel</button>
              </div>

            </div>
          </div>
        </div>

        <hr color="blue"/><br/>
      </div>
    )
  }
});

var App = React.createClass({
  render: function(){
    return (
      <div>
        <SearchBox />
      </div>
    );
  }
});

var SearchBox = React.createClass({
  getInitialState: function(){
      return {
        data: ''
      }
  },

  createAjax: function(){
      var query = this.refs.query.value;
      var data = {
        s: query
      };
      var URL = 'http://www.omdbapi.com/?t=';
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


  render: function(){
    return(
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
    );
  }
});

ReactDOM.render(<App />, document.getElementById("content"));
