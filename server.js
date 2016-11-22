var lowdb = require('lowdb');
var fileAsync = require('lowdb/lib/file-async');
var shortid = require('shortid');
var bodyParser = require('body-parser');
var express = require('express');

var db = lowdb('db.json', {storage: fileAsync});

var app = express();
var port = 3000;

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
//remove this when we start buliding our sass

//dirname

db.defaults({

}).value();

app.listen(port);

