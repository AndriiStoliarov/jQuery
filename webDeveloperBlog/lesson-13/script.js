$('.count').each(function() {
    // The prop() method sets or returns properties and values of the selected elements.
    $(this).prop('counter', 0).animate({
        counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(currentNumber) {
            $(this).text(Math.ceil(currentNumber));
        }
    });
});