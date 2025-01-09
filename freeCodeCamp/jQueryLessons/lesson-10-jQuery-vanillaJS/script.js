/* jQuery vs Vanilla JavaScript */

// the jQuery way...
var $elem = $(".someClass");

$elem.remove();
$elem.prepend($otherElem);
$elem.before($otherElem);
$elem.replaceWith($otherElem);
$elem.closest("div");

$elem.fadeIn();

$elem.animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
}, 1500);

$.ajax('https://some.url', {
    success: (data) => { /* do stuff with the data */ }
});

// the vanilla JavaScript way...
var elem = document.querySelector(".someClass");

elem.remove();
elem.prepend(otherElem);
elem.before(otherElem);
elem.replaceWith(otherElem);
elem.closest("div");

elem.style.display = "block";
requestAnimationFrame(() => elem.style.opacity = 1);

elem.animate([
    {
        transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)',
        transformOrigin: '50% 0',
        filter: 'blur(40px)',
        opacity: 0
    },
    {
        transform: 'translateY(0) scaleY(1) scaleX(1)',
        transformOrigin: '50% 50%',
        filter: 'blur(0)',
        opacity: 1
    }
], 1000);

fetch('https://some.url')
    .then(response => response.json())
    .then(data => {
        //* do stuff with the data
    }
);
