let express = require('express');
const { stringify } = require('querystring');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000;

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/strings", function(req, res) {
    res.render("strings")
})

app.post("/dice", function(req, res) {
    var number = getRandomDice(req.body.dice.count, req.body.dice.size);
    console.log(number);
    res.redirect('/');
});

app.post("/string", function(req, res) {
    var string = getRandomString(req.body.string.size);
    console.log(string);
    res.redirect('/strings');
});

function getRandomDice(count, size) {
    const fullDice = [];
    let total = 0;
    let currDie = 0;
    for (let i = 0; i < count; i++) {
        currDie = Math.floor(Math.random() * size) + 1;
        fullDice[i] = currDie;
        total += currDie;
    }
    return total;
}

function getRandomString(size) {
    let list = [];
    for (let i = 0; i < size; i++) {
        list.push(Math.floor(Math.random() * 89)+ 33);
    }
    return String.fromCharCode(...list);
}

app.listen(port, function() {
    console.log(`Server running on localhost:${port}`);
});