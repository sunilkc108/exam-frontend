
$(document).ready(function(){

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
     // console.log("scrolled")
        $('.nav').addClass('affix');
       // console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

     // making img to background
     $(".image-box").each(function () {
        "use strict";
        var $this = $(this);
        var thissrc = $(this).attr("src");
        $this.wrap(
            '<div class="imgtobg-o" style="background-image:url(' + thissrc + ')"></div>'
        );
        $this.hide();
      });

      $(".owl-carousel").owlCarousel({
        navigation : true,
        autoplay:true,
        autoplayTimeout:9000,
        singleItem:true,
        loop: true,
        animateOut: 'zoomOutRight',
        nav: true,
	      dots: false,
	      navText: ['<span class="fas fa-chevron-left fa-1x"></span>','<span class="fas fa-chevron-right fa-1x"></span>'],
        addClassActive:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });

      //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn();
      } else {
          $('.back-to-top').fadeOut();
      }
    });

     
    

      $('.multiple-items').slick({
        dots: false,
        infinite: true,
        // lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
        
        
      });

      $(window).on("resize", function (e) {
        resizeSlider();
      });
      
      let slickHeight = $(".slick-track").outerHeight();
      console.log("slickheight", slickHeight)
      
      let slideHeight = $(".slick-track").find(".slick-slide").outerHeight();
     
      function resizeSlider() {
        $(".slick-track")
          .find(".slick-slide .slide-wrap")
          .css("height", slickHeight + "px");
      }

    

      setTimeout(function(){
        $('#loader').fadeToggle();
        },1500);

});


