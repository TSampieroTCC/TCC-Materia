$(document).ready(function()
{

	$('.contents').click(function(event) {
		event.preventDefault();

		/*$('h2').removeClass('active');*/
		var $target_section = $(event.target.hash);
		/*$target_section.addClass('active');*/

	     $('html, body').animate({
	         scrollTop: $target_section.offset().top
	     }, 200);


	});
	
	Materia.Flashcheck.flashInstalled(function(version) {
		
		if (version == false || version.major <= 10)
		{
			$('<div class="no_flash"><p><strong>Oh no!</strong> Looks like you don\'t have the latest version of Flash installed.</p><a class="get_flash" href="http://www.adobe.com/go/getflashplayer">Get the latest Adobe Flash &reg; Player</a></div>').insertAfter($('.flash-version'));
		}
		else
		{
			$('<p class="flash_installed">Sweet! We\'ve detected you have Flash installed. You should be good to go.</p>').insertAfter($('.flash-version'));
		}
	});
});