/*
 * GET poses page.
 */
var data = require('../data.json');

exports.view = function(req, res){
  res.render('poses', {
  	'poses' :data
  });
};