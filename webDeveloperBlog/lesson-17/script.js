var accordion = function() {
    var data = $(".accordion").attr("data-accordion");

    $(".accordion-header").on("click", function() {
        if (data === "close") {
            // The slideUp() method slides-up (hides) the selected elements.
            $(".accordion-body").slideUp();

            if ($(this).hasClass("active")) {
                $(this).toggleClass("active");
            } else {
                $(".accordion-header").removeClass("active");
                $(this).toggleClass("active");
            }
        } else {
            $(this).toggleClass("active");
        }

        $(this).next(".accordion-body").not(":animated").slideToggle(500);
    });
};

accordion();

// short working version
// $(document).ready(function() {
//     $(".accordion-header").on("click", function() {
//         $(this).next(".accordion-body").not(":animated").slideToggle(500);
//         $(this).toggleClass("active");
//     });
// });
