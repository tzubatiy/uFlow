/*
 * GET poses page.
 */
var data = require('../data.json');

exports.view = function(req, res){
  res.render('poses', {
  	'poses' :data
  });


/*function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

 function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get('/project/'+ idNumber, addProject);
}

function addProject(result){
	console.log(result);
	var projectHTML= '<a href="#" class= "thumbnail">' +
		'<img src='+ result['image'] + '"class= "img">' +
		'<p>' + result['title']+ '</p>' + 
		'<p><small>' + result['summary']+ '</small></p></a>';

	$('#'+'project'+result.id+ ' .details').html(result['summary'])

}*/
};