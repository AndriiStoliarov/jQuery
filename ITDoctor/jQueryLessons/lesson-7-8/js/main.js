//* Lesson-7
$(document).ready(function() {
    // all code
});

// короткая версия той же функции
$(function() {
    // Метод text() устанавливает или возвращает текстовое содержимое выбранных элементов.
    var tagP = $('.mainText p').text();
    console.log(tagP);
    var tagP = $('.mainText p').text('Новый текст для тега p');
    
    // Метод hide() скрывает выбранные элементы.
    // var tagP = $('.mainText p').hide();
    var tagP = $('.mainText p').hide(2000);

    // Метод show() показывает скрытые выбранные элементы.
    // $('.mainText p').show();
    tagP.show(2000, function() {
        console.log('Hello jQuery...');
    });
});


//* Lesson-8
$(function() {
    // Цепные функции
    // $('.mainText h2').hide(2000).show(2000);

    var tagH2 = $('.mainText h2');
    tagH2.hide().text('Новый текст').show(1000);
});
