$(document).ready(function(){
	$( "#portrait" ).fadeIn( 3000, function() {
  	});
  	$( ".rest" ).fadeIn( 1500, function() {
  	});
  	$("#resumeImg").hover(function(){
		$(this).attr("src","images/OpenResume-Hover.png");
			}, function() {
		$(this).attr("src","images/OpenResume.png");
	});
});