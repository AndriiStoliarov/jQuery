/* jQuery: Getting and Setting Content and Attributes */

$("#btn").click(function() {
    console.log($("#test").text());
    console.log($("#test").html());
    console.log($("#fcc").attr("href"));
});

// $("#btn2").click(function() {
//     $("#test").text("freeCodeCamp is awesome!");
//     $("#test").html("freeCodeCamp is <b>awesome!</b>");
// });

$("#btn2").click(function() {
    $("#test").text(function(i, origText) {
        return "Old text: " + origText + " New text: freeCodeCamp is awesome! (index: " + i + ")";
    });
});

$("#btn3").click(function() {
    $("#name").val("Quincy Larson");
});