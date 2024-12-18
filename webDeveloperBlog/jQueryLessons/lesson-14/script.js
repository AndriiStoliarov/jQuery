// button "back to top"
var $btnTop = $(".btn-top");

$(window).on("scroll", function() {
    if ($(window).scrollTop() >= 500) {
        $btnTop.fadeIn(800);
    } else {
        $btnTop.fadeOut();
    }
});

$btnTop.on("click", function() {
    // Perform a custom animation of a set of CSS properties.
    $("html, body").animate({scrollTop: 0}, 900);
});