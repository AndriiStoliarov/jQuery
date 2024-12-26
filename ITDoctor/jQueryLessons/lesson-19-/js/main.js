//* Lesson-19
// $(function() {
//     $('.mainText').before('<span>New block</span>');
//     $('.mainText').after('<span>New block</span>');

//     $('.mainText').append('<span>New block</span>');
//     $('.mainText').prepend('<span>New block</span>');
// });

//* Lesson-20
$(function() {
    $('.icons img').each(function() {
        if ($(this).attr('src') == 'img/icon-3.png') {
            $(this).fadeOut(1000);
            $(this).fadeTo(2000, 0);
        }
    });
});