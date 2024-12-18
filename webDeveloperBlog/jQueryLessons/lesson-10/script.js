(function($) {
    $('.icon').on('click', function() {
        // The closest() method returns the first ancestor of the selected element.
        $(this).closest('.menu').toggleClass('menu-open');
    });
})(jQuery);
