// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='geoffrey0247';

var connectionString='mongodb://localhost:27017/'+dbName;

var db = mongoose.connect(connectionString);
db.connection.on("error", function (error) {
    console.log("database connected failed:" + error);
});

db.connection.on("open", function () {
    console.log("database connected successful!");
});

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));//false(String or Array)
app.use(bodyParser.json());

// route list
app.use('/api', userRoute);

module.exports = app;
