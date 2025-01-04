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
    // $(':submit').on('click', function() {
    //     var value = $('textarea').val();
    //     console.log('textarea >>', value);

    //     var value = $('input.text1').val();
    //     console.log('input.text1 >>', value);

    //     var value = $('#select1 :selected').val();
    //     console.log('#select1 :selected >>', value);

    //     var value = $(':checkbox').each(function() {
    //         var value = $(this).val();
    //         console.log(':checkbox >>', value);
    //     });

    //     var value = $(':checkbox:checked').each(function() {
    //         var value = $(this).val();
    //         console.log(':checkbox:checked >>', value);
    //     });
    // });
});

//* Lesson-34
// Событие submit и focus
$(function() {
//     $('.form1').on('submit', function(event) {
//          if ($('.text1').val() == '') {
//             event.preventDefault();
//             console.log('You do not fill the field.');
//          }
//     });

//     $('.text1').on('focus', function() {
//         $(this).css({
//             'border': '2px double red',
//             'background': 'green'
//         });
//    });
});

//* Lesson-35
// Событие blur и change
$(function() {
    $('.text1').on('focus', function() {
        $(this).addClass('border');
    });

    $('.text1').on('blur', function() {
        $(this).removeClass('border');
    });

    $('#select1').change(function() {
        var value = $('#select1 :selected').val();

        // if(value == 1) {
        //     $('#select2').html('<option value="1">Number 1</option><option value="2">Number 2</option>');
        // } else if(value == 2) {
        //     $('#select2').html('<option value="1">Number 1</option><option value="2">Number 2</option><option value="3">Number 3</option>');
        // } else if(value == 3) {
        //     $('#select2').html('<option value="1">Number 1</option><option value="2">Number 2</option><option value="3">Number 3</option><option value="4">Number 4</option>');
        // } else {
        //     $('#select2').html('<option value="1">Number 1</option>');
        // }

        // switch construction
        switch(value) {
            case '1':
                $('#select2').html('<option value="1">Number 1</option><option value="2">Number 2</option>');
                break;
            case '2':
                $('#select2').html('<option value="1">Number 1</option><option value="2">Number 2</option><option value="3">Number 3</option>');
                break;
            case '3':
                $('#select2').html('<option value="1">Number 1</option><option value="2">Number 2</option><option value="3">Number 3</option><option value="4">Number 4</option>');
                break;
            case '4':
                $('#select2').html('<option value="1">Number 1</option>');
                break;
        }
    });
});
