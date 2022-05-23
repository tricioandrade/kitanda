const express = require("express");
const path  = require("path");
const app = express();
const ejsLayout = require('express-ejs-layouts');


app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

// view engine setup

app.set(ejsLayout)
app.set('views', './resources/views');
app.set('layout','./layouts/layout');
app.set('view engine', 'ejs')

app.use('/', (req, res) => {
    res.render('index')
});

app.listen(8000)