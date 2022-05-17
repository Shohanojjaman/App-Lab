(function($) {
"use strict";
    
    $('.brand-wrepper').slick({
        autoplay:true,
        arrows:false,
        slidesToShow: 5,
        autoplaySpeed:2000
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
