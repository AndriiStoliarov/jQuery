// $("a").click(function(event) {
//     alert("Hello!");
//     // event.preventDefault();
//     // event.stopPropagation();
//     return false;
// });

// $("header").click(function(event) {
//     alert("Hello2!!!!");
// });

$('#quantity').keyup(function() {
    var Value = $(this).val();
    $('#msg').text(Value);
});