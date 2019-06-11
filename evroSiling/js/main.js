$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="prev arrow"><i class="icon-angle-left"></i></button>',
  nextArrow: '<button class="next arrow"><i class="icon-angle-right"></i></button>',
  fade: true,
  asNavFor: '.slider__nav'
});
$('.slider__nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

$(function(){
  $('.mobile-menu-opened').on('click', function(){
    $('.mobile-menu').fadeIn();
  })
  $('.button-close').on('click', function(){
    $('.mobile-menu').fadeOut();
  });
});
