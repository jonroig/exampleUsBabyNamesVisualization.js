import express from 'express';
import { getNameRankAndBirthsByYear } from 'usbabynames';
import fs from 'fs';

const app = express();

app.get('/name', function(req, res) {
	var theNames = getNameRankAndBirthsByYear(req.query.name, {sex: req.query.sex, getEmptyYears: true})
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