$(document).ready(function() {
	initializePage();
})

function initializePage(){
	$("onBut").click(function){
		ga("send", "event", "on", "click");
	}
	$("offBut").click(function){
		ga("send", "event", "off", "click");
	};
}
