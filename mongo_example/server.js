// First load up expres module then create the express apps
var express = require('express');
var app = express();
// require body-parser (to get POST data from the clients)
var bodyParser = require("body-parser");
// Now integrate body-parser with App
app.use(bodyParser.urlencoded());
// Require the path
var path = require('path');
// Set the Static Folder Directory and views folder directory
app.use(express.static(__dirname + "./static"));
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render('index');
})
// Add user requst
app.post('/users', function(req,res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.name});
    user.save(function(err){
        if(err)
        {
            console.log('something went wrong');
        } else {
            console.log('succesffuly added a user!');
            res.redirect('/');
        }
    })
});
app.listen(8000, function() {
    console.log("listening on port 8000");
});
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
