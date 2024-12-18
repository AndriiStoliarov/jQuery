// $(".second").replaceWith("<h2>New text</h2>");
// $("<h2>New text</h2>").replaceAll(".inner");

// оборачивает элемент в заданный тег
// $(".inner").wrap("<div class='new'>Text</div>");
// оборачивает все найденные элементы в заданный тег
// $(".inner").wrapAll("<div class='new'>Text</div>");
// становиться внутреней оберткой для всех найденныч элементов
// $(".inner").wrapInner("<div class='new'>Text</div>");

// клонирует элемент
// $(".first").clone().appendTo(".third");

// The detach() method removes the selected elements, including all text and child nodes.
// var p;
// $("button").click(function() {
//     if(p) {
//         p.appendTo("header");
//         p = null;
//     } else {
//         p = $(".hello").detach();
//     }
// });

//The empty() method removes all child nodes and content from the selected elements.
// $(".third").empty();

//The remove() method removes the selected elements, including all text and child nodes.
$(".third").remove();