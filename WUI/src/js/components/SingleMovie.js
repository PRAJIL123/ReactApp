var React = require('react');

var SingleMovie = React.createClass({

  saveFormData: function(e) {
    e.preventDefault();
    alert("Data Inserted")
    var url='http://localhost:8080/movieurl/movieAdd';
    var data={
        Title:this.props.title,
        imdbID:this.props.imdbid
      }
      alert(data.Title);
      $.ajax({
          type:"POST",
           dataType:'json',
           url:url,
           data:data
         }).done(function(data) {
           console.log("success");
      })
      .fail(function(fail) {
        //console.log('failed to register');
    });
  },

  deleteFormdata: function(e){
    e.preventDefault();
    alert("Data Deleted");
    var imdbID=this.props.imdbid;
    alert(imdbID)
    var id = imdbID;
    var url='http://localhost:8080/movieurl/deleteMovie/:id';
    //console.log("deleteurl: "+url);
    $.ajax({
        type:"DELETE",
        dataType:'json',
        url:url
      }).done(function(data) {
        alert(data)
    console.log("Delete success");
    })
    .fail(function(fail) {
      //console.log('failed to Delete');
    });
  },


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
          <h4>Movie Id: {this.props.imdbid}</h4>
        </div>

        <div className="col-sm-4 feature">
              <br/><br/><input type="submit" className="btn btn-success" value="Add" data-target={"#myModal" + this.props.imdbid} data-toggle="modal" />
        </div>

        <form className="" id="addForm" action="" onSubmit={this.saveFormData} >

        <div className="col-sm-4 feature">
          <br/><br/><input type="submit" ref="" className="btn btn-danger" value="Delete" onClick={this.deleteFormdata}/>
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
                <button className="btn btn-success" type="submit" id="addForm">Save </button>
                <button className="btn btn-default" data-dismiss="modal" type="button">Cancel</button>
              </div>

            </div>
          </div>
        </div>

      </form>

        <hr color="blue"/><br/>
      </div>
    )
  }
});


module.exports=SingleMovie;
