// Call express
var express = require('express');
var app = express(); //Invoke Function express() [will be used for routing]

// Body-parser to handle POST data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
var path = require("path");
// Static Folder & View initiation
app.use(express.static(path.join(__dirname,'./static')));
// Set up the View Folder Directory
app.set("views",path.join(__dirname,'./views'));
// Set the view engine to EJS
app.set("view engine", "ejs");

// load Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var PlatypusSchema = new mongoose.Schema({
    name: String,
    species: {type: String, default: "Platypus"},
    location: String,
    date_created: { type: Date, default: Date.now}
    })
PlatypusSchema.path('name').required(true,'Animal name cannot be blank');

mongoose.model('Platypuses',PlatypusSchema);

var Platypuses = mongoose.model('Platypuses');

// Initiate the Routes for request/response handling
app.get('/', function(req, res){
    res.render('index'); //
})
//User requests
app.post('/platypuses', function(req,res){
    console.log("POST DATA", req.body);
    res.redirect('/');
});
//add route to index.js file
app.get('/platypuses/:id', function(req,res){
    Platypus.findOne({_id: req.params.id}, function(err,user){
        res.render('user',{user:user});
    })
})
//update


//remove
app.post('/platypuses/:id/destroy', function(req,res){
    Platypus.remove({_id: req.params.id}, function(err,user){
        res.redirect('/platypuses');
    })
})

// set up port 8000
app.listen(8000, function() {
    console.log("listening to port 8000");
})




