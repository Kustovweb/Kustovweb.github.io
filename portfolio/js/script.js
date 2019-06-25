$(function(){
	$('.js-open-modal').on('click', function(evt){
		evt.preventDefault();
		$('.modal').fadeIn();
	});
	$('.modal-close').on('click', function(evt){
		evt.preventDefault();
		$('.modal').fadeOut();
	});
});
