const express = require("express");
const path  = require("path");
const app = express();
var cons = require('consolidate');

// view engine setup
// app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, './resources/views'));
// app.set('view engine', 'html');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources/views/') + '/index.html');
});

app.listen(8000)