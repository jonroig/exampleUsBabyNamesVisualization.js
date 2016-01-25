var express = require('express');
var app = express();
var babyNames = require('usbabynames');
var fs = require('fs');

app.get('/name', function(req, res) {
	var theNames = babyNames.getNameRankAndBirthsByYear(req.query.name, {sex: req.query.sex, getEmptyYears: true})
		.then(function(data){
			res.json(data);
	});
});

app.get('/', function(req,res) {
	var readable = fs.createReadStream('index.html');
  	readable.pipe(res);
});


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});