//* Lesson-9
// автоматические циклы
// $(function() {
//     $('.icons > div').css('border-bottom', 'blue 2px solid');
//     $('.icons > div').hide(3000);
// });

//* Lesson-10
// $(function() {
    // var w = $('.btn').width();
    // console.log(w);
    // var h = $('.btn').height();
    // console.log(h);

    // $('.mainText').width(750);
    // $('.mainText').height(300);

    // function widthAndHeight(element) {
    //     var className = "." + element;
    //     var widthElement = $(className).width();
    //     var heightElement = $(className).height();

    //     $('.mainText p').text('Ширина: ' + widthElement + '; Высота: ' + heightElement);

    //     console.log('Ширина: ' + widthElement + '; Высота: ' + heightElement);
    // };

    // widthAndHeight('btn');
// });

//* Lesson-11
// $(function() {
//     $('.mainText').html('<b>New text</b>');
// });

//* Lesson-12
$(function() {
    // $('.mainText h2').css("color", "blue").hide(2000).fadeIn(3000);

    // function elementOut(element, time) {
    //     if (time > 5000 || time < 1000 || isNaN(time)) {
    //         return false;
    //     } else {
    //         var className = "." + element;
    //         $(className).fadeOut(time);
    //     }
    // }
    // elementOut('mainText', 500);
});

//* Lesson-13
// $(function() {
//     function NewFunc() {
//         console.log("New function body");
//     }

//     $('.mainText').fadeTo(4000, 0.2, NewFunc()).fadeTo(2000, 1);
// });

//* Lesson-14
$(function() {
    $('.mainText').slideUp(2000).slideDown(1000);
});