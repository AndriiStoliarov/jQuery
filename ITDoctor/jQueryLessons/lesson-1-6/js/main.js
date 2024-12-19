//* Lesson-2
// $('#recive');

// $('.logo');

// $('a');


//* Lesson-3
// вложенный селектор
// $('nav menu');

// дочерний елемент
// $('.icon > div');

// соседний елемент
// $('.icon img + h4');


//* Lesson-4
// поиск элеменов по аттрибутам
// $('img[height=150]').css("border", "#fc635e 1px solid");

// ^ значение аттрибута начинается с
// $('img[src^="img/"]').css("border", "#df8df8 1px solid");

// $ значение аттрибута заканчивается на
// $('img[src$=".png"]').css("border", "black 1px solid");

// * значение аттрибута в любом месте
// $('a[href*=fo]').css("border", "darkred 3px solid");


//* Lesson-5
// выбор четных элементов
// $('menu li:even').css("background-color", "darkred");

// выбор не четных элементов
// $('menu li:odd').css("background-color", "darkgreen");

// :not исключает элемент из выборки
// $('img:not(.logo img)').css("border", "black 2px solid");

// :has() выбирает элементы содержащие другие элементы
// $('li:has(a)').css("border", "blue 2px solid");

// :contains() выбирает элементы содержащие указанную строку
// $('p:contains(client)').css("color", "blue");

// выбор первого элемента
// $('li:first').css("background-color", "blue");

// выбор последнего элемента
// $('li:last').css("background-color", "blue");

// выбор скрытых элементов
// $('div:hidden').css("background-color", "blue");

// выбор видемых элементов
// $('div:visibility').css("background-color", "blue");

//* Lesson-6
// Код, включенный в $(document).ready(), будет запущен только после того, как объектная модель документа (DOM) страницы будет готова для выполнения.
$(document).ready(function() {
    // all code
});

// короткая версия той же функции
$(function() {
    // all code
});

// Код, включенный в $(window).on("load", function() { ... }), будет запущен после того, как будет готова вся страница (изображения или iframe), а не только DOM.

$(window).on("load", function() {
    // all code
});
