var should = require("chai").should(),
//expect = require("chai").expect,
//assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/weatherurl");

//............................Testing weatherAll................................
describe("Testing the movieAll", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/weatherAll")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        console.log(myObj);
        var msg = "DATABASE CONTAINS CITY";
        console.log(msg);
        done();
      });
  });
});


//............................Testing singleCity Weather................................
describe("Testing the singleMovie", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/singleWeather/577a0c6a5e8d64a10cd33280")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        //console.log(myObj);
        var status = res.text;
        if(status === "null")
        {
          var msg = "city not exist";
          console.log(msg);
        }
        else {
          var msg1 = "city exist";
          console.log(msg1);
        }
        done();
      });
  });
});


// //............................Testing deleteMovie................................
// describe("Testing the deleteMovie", function(err) {
//   it("Should handle and send the json data", function(done) {
//     url
//       .delete("/deleteMovie/127864348703545")
//       .expect(200)
//       .end(function(err, res) {
//         if(err) {
//           throw err;
//          }
//         var status = res.text;
//         if(status === "Movie id not exist")
//         {
//           console.log(status);
//         }
//         else {
//           var msg1 = "movie exist";
//           console.log(msg1);
//         }
//         done();
//       });
//   });
// });


// //............................Testing updateMovie................................
// describe("Testing the updateMovie", function(err) {
//   it("Should handle and send the json data", function(done) {
//     url
//       .put("/updateMovie/2344444444444455666")
//       // 577a0ee6792851b50c0f9b07
//       .expect(200)
//       .end(function(err, res) {
//         if(err) {
//           throw err;
//          }
//         var status = res.text;
//         if(status === "Movie id not exist, not possible to update")
//         {
//           console.log(status);
//         }
//         else {
//           var msg1 = "movie exist";
//           console.log(msg1);
//         }
//         done();
//       });
//   });
// });


//............................Testing weatherAdd................................
describe("Testing the movieAdd", function(err) {
  it("Should handle and send the json data", function(done) {
    url
    .get("/weatherAdds")
    .expect(404)
    .end(function(err, res) {
      if(err) {
        throw err;
       }
      var status = res.text;
      if(status = 404)
      {
        var msg = "Data not added";
        console.log(msg);
      }
      else {
        var msg1 = "data added succesfully";
        console.log(msg1);
      }
     done();
     });
  });
});
