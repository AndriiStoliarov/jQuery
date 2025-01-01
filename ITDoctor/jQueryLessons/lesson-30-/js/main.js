//* Lesson-30
$(document).ready(function() {
    $('.small a').on('click', function(event) {
        if ($('.big img').attr('src') !== $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        event.preventDefault();
    });

    $('.button').on('click', function() {
        $('.gallery').slideToggle(500);

        if ($('.button').text() == '-') {
            $('.button').text('+');
        } else {
            $('.button').text('-');
        }
    });

    $('.small a img').on('click', function() {
        $('.small a img').fadeTo(500, 1).css({
            'border': 'none'
        });

        $(this).fadeTo(500, 0.6).css({
            'border': '1px dotted red'
        });
    });
});

//* Lesson-31
// фильтрация элементов формы
$(function() {
    $(':checkbox').fadeOut(1000);
    $(':radio').fadeOut(1000);
    $(':submit').fadeOut(1000);
    $(':reset').fadeOut(1000);
    $(':file').fadeOut(1000);
    $(':button').fadeOut(1000);
    $(':text').fadeOut(1000);
    $(':password').fadeOut(1000);
    $(':input').fadeOut(1000);
    $('.form1 :input').fadeOut(1000);
});