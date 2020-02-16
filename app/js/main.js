$(function () {

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
    });

    $('.product-slider__inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    var mixer = mixitup('.products__inner-box');

});