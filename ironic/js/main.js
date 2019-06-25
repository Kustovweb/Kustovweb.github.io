$(function(){
	    $('.menu a, .scroll a, .left-menu a').on('click', function(e){
	      e.preventDefault();
	      $('.menu a').removeClass('site-navigation-current').filter(this).addClass('site-navigation-current');
	      var selector = $(this).attr('href'); 
	      var h = $(selector);
	      $('html, body').animate({
	        scrollTop: h.offset().top+5
	      }, 900);
			});
			$('.mobile-menu').on('click', function(){
					$('.left-menu').fadeIn();
			});
			$('.close-menu-left').on('click', function(){
				$('.left-menu').fadeOut();
			});
		
	});
