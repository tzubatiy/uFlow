
/*
 * GET home page.
 */
 /*
 * Push data into flows done.
 */
//var fs = require("fs");

var data = require('../profiles.json');
var version;

exports.view = function(req, res){
	// version = false;
	console.log(data)
 	res.render('index', data);
};

// exports.viewB = function(req, res){
// 	version = true;
// 	console.log(data)
//  	res.render('index_B', data);
// }; not needed anymore, was used to render version b

exports.changeTime = function(req, res){
	var time = req.params.time;
	data["breathCycle"] = time;
	console.log(time);
	res.status(200).send('OK');
	data["flowsdone"] += 1;
	data["yogatime"] += 10;


	//fs.writeFile("../profiles.json", data)
};