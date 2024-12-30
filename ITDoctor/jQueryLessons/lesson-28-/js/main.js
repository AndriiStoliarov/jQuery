//* Lesson-28
$(function() {
    $('.mainText').on('click', function(event) {
        // console.log(event.screenX + " " + event.screenY);
        // console.log(event.pageX + " " + event.pageY);
        console.log(event.altKey);
        console.log(event.ctrlKey);
        console.log(event.shiftKey);
        console.log(event.target);
    });
});