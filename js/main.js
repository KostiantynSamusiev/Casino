$(document).ready(function () {
    $("#news-slider").owlCarousel({
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigationText: ["", ""],
        dots: false,
        navigation: true,

        pagination: true,
        autoPlay: true,
        responsive: {
            300: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: false
            },

        }
    });
});


$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.mobile-popup ').fadeToggle();
    });
});