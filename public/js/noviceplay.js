'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Playing file")
	$("#play").click(function(e) {
		var time = $("#time option:selected").text();
		console.log("profile/" + time);

		$.get("/profile/" + time, addFlowsdone);
		var audio = new Audio('nov20.mp3');
		audio.play();
	});

function addFlowsdone(e){
	console.log("Flows will be added");

}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}