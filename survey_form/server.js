var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app 
var app = express();
// body-pasrer
var bodyParser = require('body-parser');
// use it!!!
app.use(bodyParser.urlencoded());

// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
  res.render("index");
  });
/*
// post route for adding a user
app.post("/results", function(req, res) {

   var user = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        description: req.body.description
    };
   res.render("results",{user});
  // res.render("results",{name: req.body.name, location: req.body.location, language: req.body.language, description: req.body.description})
}); */
app.post("/results", function(req, res){
        console.log("post data: ", req.body)
        console.log("post data: ", req.body.name)

        var user = {
                name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        description: req.body.description    
        };

    res.render("results", {user})
});


   // This is where we would add the user to the database
// Then redirect to the root route
//      res.redirect('results');
//      })
// tell the express app to listen on port 8000
      app.listen(8000, function() {
       console.log("listening on port 8000");
       })

