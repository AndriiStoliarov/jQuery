// $(".anim").click(function() {
//     $(this).fadeOut(3000);
//     $(this).fadeIn(3000);
// });

// $(".anim").click(function() {
//     $(this).fadeToggle(3000);
// });

// $(".anim").click(function() {
//     $(this).fadeTo("slow", 0.4);
// });

// $(".anim").animate({
//     'opacity': 'hide'
// });

// $(".anim").animate({
//     'opacity': 'show'
// });

// $(".anim").animate({
//     'opacity': 0.5,
//     'height': '50px',
//     'width': '250px'
// });

// $(".anim").animate({
//     'opacity': '-=0.3',
//     'height': '+=50px',
//     'width': '-=25px'
// });

// последовательное анимирование
// $(".anim")
//     .animate({'height': '+=50px'})
//     .animate({'width': '-=25px'});

// праллельное анимирование
// $(".anim")
//     .animate({'height': '+=50px'})
//     .animate({'width': '-=25px'}, {queue: false});

// остановка анимации
$(".anim")
    .animate({'height': '+=50px'})
    .stop()
    .animate({'width': '-=25px'});

// отключение анимации
// The jQuery.fx.off property is used to globally disable/enable all animations.
jQuery.fx.off = true;
