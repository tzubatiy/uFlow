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
		var audio = new Audio('int20.mp3');
		audio.play();
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}