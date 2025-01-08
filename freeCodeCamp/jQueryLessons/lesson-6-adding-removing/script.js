/* jQurey: Adding and Removing Elements */

// $('.target').remove();

$('.target')
    .append('<div class="child">Append</div>', '<p>Hello!</p>')
    .prepend('<div class="child">Prepend</div>')
    .before('<div class="sibling">Before</div>')
    .after('<div class="sibling">After</div>');

$('p').append('<b>LOTS</b>');

// $('.target').remove();

// $('p').remove();

// $('.target').empty();

$('p').remove('.filter');