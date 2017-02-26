
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$(".hamburger").click(function() {
		$(".myMenu").slideToggle();
	});
}