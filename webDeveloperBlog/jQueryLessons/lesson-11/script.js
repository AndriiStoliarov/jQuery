$('.mobile-tab').hide();

$('#burg').on('click', function() {
    // The slideToggle() method toggles between slideUp() and slideDown() for the selected elements.
    $('.mobile-tab').slideToggle();
});