//* Lesson-24
// $(function() {
//     $('.logo').on("mouseover", function() {
//         console.log('Event Mouse--over...');
//     });

//     $('.logo').on("mouseout", function() {
//         console.log('Event Mouse--out...');
//     });

//     $('.logo').on("click", function() {
//         console.log('Event Click...');
//     });

//     $('.logo').on("mousemove", function() {
//         console.log('Event Mouse--move...');
//     });

//     $('.logo').on("mouseup", function() {
//         console.log('Event Mouse--up...');
//     });
// });

//* Lesson-25
// $(function() {
//     var myElem = document.getElementById('recive');

//     function elemClick() {
//         console.log('Event model JS');
//     }

//     myElem.onclick = elemClick;
// });

//* Lesson-26
// $(function() {
//     $(window).scroll(function() {
//         console.log('Event Scroll');
//     });

//     $('.arrowDown').click(function() {
//         var clone = $(this).clone();
//         $(this).after(clone);
//     });
// });

//* Lesson-27
$(function() {
    var link = $('menu li a');

    // link.mouseover(function() {
    //     $(this).addClass('border');
    // });

    // link.mouseout(function() {
    //     $(this).removeClass('border');
    // });

    link.hover(
        function() {
            $(this).addClass('border');
        },
        function() {
            $(this).removeClass('border');
        }
    );
});