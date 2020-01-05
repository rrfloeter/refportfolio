//Automating carousel every 4.5 seconds
$('.carousel.carousel-slider').carousel({
    padding: 200
});
setTimeout(autoplay, 4500);
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 4500);
}

//change image when scrolling
$(window).scroll(function () {
    //test
    console.log($(window).scrollTop());
});

//scroll happens when downbutton is hit
$(function () {
    $(".button").click(function () {
        $("html, body").animate({ scrollTop: 841 }, "slow");

        $(function () { //document ready
            b($(".sb1"), 5000); //calls the function

        });
        $(function () { //document ready
            b($(".sb3"), 5000); //calls the function
        });
    });
});

//button scroll
// $(".button").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".second").offset().top
//     },
//         'slow');

//     $(function () { //document ready
//         b($(".sb1"), 5000); //calls the function

//     });
//     $(function () { //document ready
//         b($(".sb3"), 5000); //calls the function
//     });

// });


var b = function ($b, speed) {
    $b.animate({ //animates the bee to the right side of the screen
        "left": "20%"
    }, speed, function () { //when finished it goes back to the left side
    });
};

var recommendation1 = function ($sb1, speed) {
    $b.animate({ //animates the bee to the right side of the screen
        "left": "20%"
    }, speed, function () { //when finished it goes back to the left side

    });
};

var recommendation2 = function ($sb3, speed) {
    $b.animate({ //animates the bee to the right side of the screen
        "left": "20%"
    }, speed, function () { //when finished it goes back to the left side

    });
};

// //button scroll
// $(".button2").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".third").offset().top
//     },
//         'slow');

//     $(function () { //document ready
//         b($(".sb1"), 5000); //calls the function

//     });
//     $(function () { //document ready
//         b($(".sb3"), 5000); //calls the function
//     });

// });

//scroll happens when downbutton is hit
$(function () {
    $(".button2").click(function () {
        $("html, body").animate({ scrollTop: 2008 }, "slow");

    });
});
