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
    // $('nav menu').addClass('border').removeClass('border');
    $('nav menu').removeClass('border');
});