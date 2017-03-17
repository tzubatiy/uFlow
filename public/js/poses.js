
$(document).ready(function() {
	showPoses();
})

function showPoses() {
	$(".wordPoses").click(function() {
		// console.log('clicked')
		$(this).next().slideToggle();
		// $(this).css({backgroundColor: "#ffe"});
	})
}
