$(document).ready(function(){
    $('.card-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
          {
              breakpoint: 720,
              settings: 'unslick'
          }
        ]
});
  });