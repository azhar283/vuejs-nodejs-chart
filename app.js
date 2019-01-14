var express = require('express');
var mongoose = require('mongoose');
var config = require("./config");
//var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var cors = require('cors');
var indexController = require('./controllers/IndexController');
var app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(cors());

mongoose.connect(config.connectionStr).then(
    () => {
        console.log('DB connection successful');
        app.listen(3000, () => console.log('Server started on port 3000'));
        indexController(app);
    },
    err => {
        console.log(err);
    }
);
