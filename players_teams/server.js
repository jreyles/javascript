var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'static')));

app.get('/', function(req,res){
    res.render('index');
});

app.listen(8000,function(){
    console.log('Listening on port 8000');
})
