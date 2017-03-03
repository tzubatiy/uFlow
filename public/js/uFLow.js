	
$(document).ready(function() {
	showHam();
})

function showHam() {
	$(".hamburger").click(function() {
		$(".myMenu").slideToggle();
	});
}