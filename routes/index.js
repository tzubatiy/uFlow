
/*
 * GET home page.
 */
 /*
 * Push data into flows done.
 */
//var fs = require("fs");

var data = require('../profiles.json');

exports.view = function(req, res){
	console.log(data)
  res.render('index', data);
};

exports.changeTime = function(req, res){
	var time = req.params.time;
	data["breathCycle"] = time;
	console.log(time);
	res.status(200).send('OK');
	data["flowsdone"] += 1;
	data["yogatime"] += 10;


	//fs.writeFile("../profiles.json", data)
};