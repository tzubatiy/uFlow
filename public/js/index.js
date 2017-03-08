$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("#lHelp").click(function(){
		ga("send", "event", "menuhelp", "click")
		console.log("clicked");
	});
}
