$(document).ready(function(){
    $('.slick_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
      
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
               
              }
            } 
          ]
    });
  });