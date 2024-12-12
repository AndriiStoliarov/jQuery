// var p = $(".first");
// var offset = p.offset();
// p.html("left: " + offset.left + ", top: " + offset.top);

// $(".third").offset({top: 10, left: 250});

// var p = $(".first");
// var position = p.position();
// p.html("left: " + position.left + ", top: " + position.top);

// function showHeight(element, height) {
//     // The text() method sets or returns the text content of the selected elements.
//     $("div").text("Height of the " + element + " is " + height);
// }

// $("#getp").click(function() {
//     showHeight("Paragraph", $("p").height());
// });

// $("#getd").click(function() {
//     showHeight("Document", $(document).height());
// });

// $("#getw").click(function() {
//     showHeight("Window", $(window).height());
// });

var p = $("p:first");
$("p:last").text("innerHeight: " + p.innerHeight());