var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//body-parser to handle POST data
app.use(bodyParser.urlencoded());
// Moment for the dating moments
var moment = require('moment');
var now = moment(); //invoke the function moment

var path = require("path");
// static folder setup
app.use(express.static(path.join(__dirname,'./static')));
// views folder setup
app.set("views",path.join(__dirname, './views'));
// set the view engine to EJS
app.set("view engine", "ejs");

//Routes
// Root Request req - request; res - response
app.set('/' , function(req, res){
    res.render('index');
})

app.post('/user', function(req,res) {
    console.log("POST DATA", req.body);
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening to port 8000");
})

//connect to mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    quote: String,
    date: String
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
/*
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body):;
    res.redirect('/');
})*/
//app.get('/quotes'
app.post('/quotes',function(req,res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, quote: req.body.quote, date: new Date() });
    user.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a user!');
            res.redirect('/quotes');
        }
    })
})

app.get('/quotes',function(req,res){
        User.find({},function(err,users)
            {
            res.render("quotes",{users:users});
            }).sort({'date':-1})
        })

app.get('/', function(req,res) {
//    User.find({}, function(err, users) {
    res.render("index");    
//    })
})



