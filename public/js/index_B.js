$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("#bHelp").click(function(){
		ga("send", "event", "buttonhelp", "click");
		console.log("clicked");
	});
}
