$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$(".onBut").click(function(){
		ga("send", "event", "on", "click")
		console.log("clicked");
	})
	$(".offBut").click(function(){
		ga("send", "event", "off", "click")
	});
}
