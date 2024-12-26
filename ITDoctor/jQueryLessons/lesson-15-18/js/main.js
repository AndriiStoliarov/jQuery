//* Lesson-15
// Добавление и удаление атрибутов
// $(function() {
    // var src = $('.logo img').attr('src');
    // console.log(src);

    // $('.logo img').attr('src', 'img/icon-1.png');

    // $('.logo img').attr('title', 'Подсказка');

    // $('.logo img').removeAttr('src');

    // function changeAttr(element, newAttr, newValue) {
    //     var clasname = "." + element;
    //     $(clasname).attr(newAttr, newValue);
    // }

    // changeAttr('logo', 'title', 'some new text');
// });

//* Lesson-16
// Добавление и удаление классов
$(function() {
    $('nav menu').addClass('border').removeClass('border');
    $('nav menu').removeClass('border');
});

//* Lesson-17
// Работа с CSS стилями
// $(function() {
//     const fontSize = $('nav menu').css('font-size');
//     console.log('fontSize :>> ', fontSize);

//     const color = $('nav menu').css('color');
//     console.log('color :>> ', color);

//     $('nav menu li a').css('color', '#ff0000');
//     $('nav menu li a').css('color', 'rgb(0, 255, 0)');
//     $('nav menu li a').css('font-size', '25px').css('color', '#0000ff');

//     $('nav menu li a').css({
//         'color': '#ff0000',
//         'font-size': '24px',
//         'padding': '10px'
//     });
// });

//* Lesson-18
$(function() {
    $('nav menu li a').animate({
        fontSize: '24px',
        'padding': '10px'
    }, 3000);
});