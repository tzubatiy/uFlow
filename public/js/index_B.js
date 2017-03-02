$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("#bHelp").click(function(){
		ga("send", "event", "help", "click")
		console.log("clicked");
	});
}
