let express = require('express');
let app = express();
app.set('view engine', 'ejs');

let port = 3000;


app.get("/", function(req, res) {
    var names = ["A", "B", "C", "D", "E", "F"]
    var number = getRandomInt(5);
    res.render("index", {name: names[number]});
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.listen(port, function() {
    console.log("Server running on localhost:3000");
});