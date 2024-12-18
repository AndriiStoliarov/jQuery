// $('<div id="my" class="page">Hello body!</div>').appendTo("body");

// $('<div id="my" class="page">Hello content!</div>').appendTo("#content");

// передача атрибутов и значений отдельными параметрами
// $('<div>Hello content!</div>', {'id': 'my', 'class': 'page'}).appendTo("#content");

// передача атрибутов и значений с помощью метода
// $('<div>Hello content!</div>').attr({'id': 'my', 'class': 'page'}).appendTo("#content");

// var myDiv = document.createElement('div');
// myDiv.id = "my";
// myDiv.className = "page";

// вставить елемент после выбраного элемента
// $("p").after("<hr/>");
// $("<hr/>").insertAfter("p");

// вставить елемент до выбраного элемента
// $("p").before("<hr/>");
// $("<hr/>").insertBefore("p");

// вставить елемент в конец выбраного элемента
// $("p").append("<hr/>");
// $("p").append("<span>test<span/>");
// $("p").append("test");

// вставить елемент в конец выбраного элемента переданного в качестве аргумента
// $("<span>OK<span/>").appendTo("#content");

// вставить елемент в начало выбраного элемента
// $("#content").prepend(("<span>OK<span/>"));
// вставить елемент в начало выбраного элемента переданного в качестве аргумента
$("<span>OK<span/>").prependTo("#content");
