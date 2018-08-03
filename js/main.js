; (function ($, window, document, undefined) {
  'use strict';
  $(function () {
    $(document).ready(function () {

      //  PARTIALS  //
      
      /**
       * HOME
       * 
      */
      
      $("#banner").vegas({
          slides: [
              { src: "../img/banner/bloom-banner1.png" }
              /* { src: "../img/banner/banner4.jpg" } */
          ],
          overlay: "../img/overlays/03.png", 
          timer: false
      });
      
      
      
      console.log("Home partial");
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });
      

      

    });
  });
})(jQuery, window, document);