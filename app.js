

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
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
    console.log("数据库连接成功");
});

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', userRoute);

module.exports = app;
