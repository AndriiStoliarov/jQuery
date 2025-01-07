/* jQuery Events */

$(function() {

    $("p").click(function() {
        console.log("You clicked a paragraph!");
    });

    $("p").on("click mouseenter", function() {
        console.log("You clicked a paragraph!");
    });

    $("p").on({
        "click": function() { console.log("clicked!"); },
        "mouseover": function() { console.log("hovered!"); }
    });

    $("p").off("click");

    $("p").one({
        "click": function() { console.log("clicked!"); },
        "mouseover": function() { console.log("hovered!"); }
    });

    $("p").hover(function() {
        console.log("You entered.");
    },
    function(){
        console.log("You left");
    });

    $("input").change(function() {
        console.log("You did something!");
    });
});

// dblclick, mouseenter, mouseleave, mousedown, mouseup, hover

// form events: focus, blur,change