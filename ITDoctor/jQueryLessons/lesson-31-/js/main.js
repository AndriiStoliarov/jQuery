//* Lesson-31
// фильтрация элементов формы
$(function() {
    // $(':checkbox').fadeOut(1000);
    // $(':radio').fadeOut(1000);
    // $(':submit').fadeOut(1000);
    // $(':reset').fadeOut(1000);
    // $(':file').fadeOut(1000);
    // $(':button').fadeOut(1000);
    // $(':text').fadeOut(1000);
    // $(':password').fadeOut(1000);
    // $(':input').fadeOut(1000);
    // $('.form1 :input').fadeOut(1000);
});

//* Lesson-32
// фильтрация состояния
$(function() {
    // $('.form1 :checkbox:checked').fadeOut(1000);
    // $('.form1 :selected').remove();
});

//* Lesson-33
// Получить значение элемента
$(function() {
    $(':submit').on('click', function() {
        var value = $('textarea').val();
        console.log('textarea >>', value);

        var value = $('input.text1').val();
        console.log('input.text1 >>', value);

        var value = $('#select1 :selected').val();
        console.log('#select1 :selected >>', value);

        var value = $(':checkbox').each(function() {
            var value = $(this).val();
            console.log(':checkbox >>', value);
        });

        var value = $(':checkbox:checked').each(function() {
            var value = $(this).val();
            console.log(':checkbox:checked >>', value);
        });
    });
});
