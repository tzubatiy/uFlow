
/*
 * GET home page.
 */
 /*
 * Push data into flows done.
 */
var data = require('../profiles.json');

exports.view = function(req, res){
  res.render('index' ;{
  	'index' :data
  })
};