const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const personRoutes = require('./routes/person');
const mongoose = require('mongoose');

const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://Kippins:Username@cluster0.j9dii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(indexRoutes);
app.use("/person", personRoutes);

app.listen(port, function(req, res) {
    console.log('listening on port 3000')
})

