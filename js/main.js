(function($) {
"use strict";
    $(document).ready(function () {
        jQuery('header nav').meanmenu({
            meanMenuContainer: 'body',
            meanScreenWidth: "768",
    });
    });
    $('.brand-wrepper').slick({
        autoplay:true,
        arrows:false,
        slidesToShow: 5,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.testimonial-wrepper').slick({
        autoplay:true,
        arrows:true,
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        slidesToShow: 1,
        autoplaySpeed:2000
    });

})(jQuery)
