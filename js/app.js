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

  	clearScreen();
  	$('#about').show();
  	$('#aboutButton').click(function(){
  		clearScreen();
  		$('#about').show();
  	});
  	$('#skillsButton').click(function(){
  		clearScreen();
  		$('#skills').show();
  	});
  	$('#portfolioButton').click(function(){
  		clearScreen();
  		$('#portfolio').show();
  	});
  	$('#experienceButton').click(function(){
  		clearScreen();
  		$('#experience').show();
  	});
  	$('#educationButton').click(function(){
  		clearScreen();
  		$('#education').show();
  	});
  	$('#otherButton').click(function(){
  		clearScreen();
  		$('#other').show();
  	});
});

function clearScreen(){
	$('#about').hide();
	$('#skills').hide();
	$('#portfolio').hide();
	$('#experience').hide();
	$('#education').hide();
}