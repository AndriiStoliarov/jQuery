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

//* Lesson-29
$(function() {
    $('.btn, .arrowDown').on('click', function(event) {
        // event.preventDefault();
        var answer = confirm('Вы хотите отправить данные?');

        if (!answer) {
            event.preventDefault();
        }
    });
});
