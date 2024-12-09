// $(".box").css({
//     color : 'green',
//     fontSize : '12px',
//     marginLeft : '10px'
// });

// $(".box").css({
//     'color' : 'green',
//     'font-size' : '12px',
//     'margin-left' : '10px'
// });

// $("#content").css('height', function(i, value) {
//     return parseFloat(value) * 1.2;
// });

// $("#content").addClass('name');
// $("#content").removeClass('box');

// $("#content").toggle();

// attr(attrName)
// attr(attrName, attr Value)
// removeattr(attrName)

var altText = $('img').attr('alt');
$('img').attr('src', '/img/default.jpg');

$('a#my').attr({
    'href': 'https://www.youtube.com/@SuprunAlexey/videos',
    'title': 'Web Developer Blog'
});