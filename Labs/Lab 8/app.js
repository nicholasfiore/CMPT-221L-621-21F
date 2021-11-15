const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/Student');

const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({entended: true}));
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority")

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/user', function(req, res) {
    res.render("user");
});

app.post("/newUser", function(req, res) {
    console.log(req.body.user.firstName + " " + req.body.user.lastName);
    Student.create(req.body.user, function (err, user) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/user');
        }
    })
});

app.listen(port, function(req, res) {
    console.log('listening on port 3000');
})