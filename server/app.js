var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));


app.get('data-request', function(req, res){
    res.json({date : "message"});});

app.get('/*', function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get('port'),function(){
    console.log("Listening on Port: " + app.get('port'));
});