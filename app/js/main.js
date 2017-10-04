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

$(".datec").click(function() {
    $(".top-item").css('display', 'block');
		$( this ).addClass("active");
		$(".topr, .mostr").removeClass("active");
});
$(".topr").click(function() {
		$( this ).addClass("active");
		$(".datec, .mostr").removeClass("active");
    $(".top-item1").css('display', 'none');
		$(".top-item2").css('display', 'block');
});
$(".mostr").click(function() {
		$( this ).addClass("active");
		$(".datec, .topr").removeClass("active");
    $(".top-item2, top-item1").css('display', 'none');
		$(".top-item3").css('display', 'block');
});
