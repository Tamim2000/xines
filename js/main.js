
$(function(){
    "use strict";

// brand slider  jQ script-----------------
$('.brand').slick({
    slidesToShow:5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  //========================================== */

  $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
          $('header').addClass('fixed-header');
          $('header').addClass('visible-title');
      }
      else {
          $('header').removeClass('fixed-header');
          $('header').removeClass('visible-title');
      }
  });
  
// img animation efect pluign activation
//----------------------------------------
AOS.init();






})(jQuery);
