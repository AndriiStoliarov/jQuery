// $(".anim").hide(800);

// $(".anim").click(function() {
//     $(this).hide(800);
// });

// $(".anim").hide('slow', function() {
//     alert("Hello!");
// });

// $('#stick').click(function() {
//     $("#hide").slideDown('slow');
// });

function changeClass() {
    $(this).prev().toggleClass('active');
}

$(function() {
    $('article h2').click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});