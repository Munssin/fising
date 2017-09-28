$('body').css('overflow-x', 'hidden');
$(document).ready(function() {
	new WOW().init();
});


$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
	rows: 2,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#1, #m1").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 2000);
});
