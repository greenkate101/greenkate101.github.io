var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
//remove this when we start buliding our sass
app.use(express.static(__dirname + '/src/css'));
//dirname

app.listen(port);

var database = {
	sharksId: 1,
	sharks: []
};

app.get('/api/sharks', function (req, res) {
	res.join(database.sharks);
});

app.post('/api/sharks', function(req, res) {
	var body = req.body;
	var name = body.name;
	var weight = body.weight;
	var location = body.location;

	var newShark = {
		id: database.sharks.push(newShark);
	};
		database.sharkId++;

		res.json(newShark);
}