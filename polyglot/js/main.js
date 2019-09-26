  $(document).ready(function(){
    $('.bxslider').bxSlider({
				infiniteLoop: true,
				useCSS: true,
				captions: false,
				adaptiveHeight: true,
				responsive: true,
				preloadImages: 'all',
				touchEnabled: true,
				controls: false,
				auto: true,
				autoStart: true,
				autoHover: true,
				pause: 3600,
				nextText: '',
				prevText: '',
        slideMargin: 50,
        minSlides: 1,
        maxSlides: 4,

		});
    $('.bxslider__customers').bxSlider({
        infiniteLoop: true,
        randomStart: true,
        useCSS: true,
        captions: false,
        adaptiveHeight: false,
        responsive: true,
        touchEnabled: true,
        controls: false,
        auto: false,
        autoStart: true,
        autoHover: true,
        pause: 3600,
        nextText: '',
        prevText: '',
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 350,
        slideMargin: 50,
    });
{
    var sliderNew = $('.slider__new');
    var sld = function() {
      if ($(window).width() > 769) {

        sliderNew.bxSlider({
          infiniteLoop: true,
          randomStart: true,
          useCSS: true,
          captions: false,
          adaptiveHeight: true,
          responsive: true,
          touchEnabled: true,
          controls: false,
          auto: true,
          autoStart: true,
          autoHover: true,
          pause: 3600,
          nextText: '',
          prevText: '',
          minSlides: 1,
          maxSlides: 3,
          slideWidth: 300,
        });
      } else {
        sliderNew.destroySlider();
      }
    };
    sld();
    $(window).resize(sld);
}



    $('.teachers-slider').slick({
        infinite: true,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
    {
        breakpoint: 768,
        settings: 'unslick'
    },
    {
       breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  });
  $('.hamburger').on("click",function() {
    $('.menu').toggle('is-active');
  });
