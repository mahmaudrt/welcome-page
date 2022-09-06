// Sticky Menu
$(document).ready(function(){
  $('#nav').onePageNav({
    currentClass: 'current',
  });
});
$(window).on('scroll', function(){
  if($(this).scrollTop() > 25){
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }
});

$(document).ready(function(){
  var swiper = new Swiper(".news-slider-box", {
    centeredSlides: true,
    loop: true,
    autoplay: true,
    slidesToScroll: 1,
    spaceBetween: 30,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        767: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        991: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
  });   
});