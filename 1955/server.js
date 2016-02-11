var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
require('./server/config/mongoose.js');
//Mongoose must be required before routes
require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log('listening on 8000!');
});


