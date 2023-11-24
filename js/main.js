$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 2,
        navigation: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true
    });
});