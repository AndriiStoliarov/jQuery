/* jQuery: CSS and Classes */

// $("button").click(function() {
//     console.log($("p").css("fontSize"));
//     console.log($("p").css("font-size"));
//     console.log($("p.big").css("font-size"));

//     $("p.big").css("font-size", "100px");

//     $("p").css({
//         fontSize: "100px",
//         color: "blue",
//         backgroundColor: "yellow"
//     });
// });

$("button").click(function() {
    $("h1").addClass("red");

    // $("p").removeClass("big");

    $("p").toggleClass("big");

    console.log($("h2").hasClass("big"));
    console.log($("h2").hasClass("red"));
});