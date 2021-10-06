var express = require("express");

var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.render('');
})

app.listen(port, function() {
    console.log("Hey can you see me? I'm running!")
})