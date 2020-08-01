/*
    $(document).ready() waits until jQuery library is loaded before executing function
    This is only necessary if you put the script in the <head></head> section instead of just before the </body>

$(document).ready(function(){       
    $("h1").css("color", "red");    // turn h1 red after jQuery loads
})

*/

$("a").attr("href", "https://www.yahoo.com");   // change "href" attribute of link

$("h1").before("<button>Before</button>");     // creates a new button before h1

$("h1").after("<button>After</button>");      // creates a new button after h1

$("h1").prepend("<button>Prepend</button>");    // creates a new button inside of h1 at the start

$("h1").append("<button>Append</button>");     // creates a new button inside of h1 at the end

$(document).keydown(function(event){    // checks for key presses
    $("h1").text(event.key);            // change h1 to whichever key was pressed
});

$("input").keydown(function(event){     // checks for key presses when typing in input field
    console.log(event.key);             // logs the key to the console
});

$("h1").on("mouseover", function(){     // when mouse goes over h1. Note: can replace "mouseover" with other events
    $("h1").css("color", "purple");     // change h1 color to purple
})

$("#btn-toggle").click(function(){      // checks for button click
    $("h1").toggle();                   // hides or shows h1
});

$("#btn-fade").click(function(){           
    $("h1").fadeToggle();                // hides or shows h1
});

$("#btn-slide").click(function(){           
    $("h1").slideToggle();               // hides or shows h1
});

$("#btn-transparent").click(function(){           
    $("h1").animate({opacity: 0.5});     // hides or shows h1
});

$("#btn-multiple").click(function(){
    $("h1").slideUp().slideDown().fadeOut().fadeIn().animate({opacity: 0.5});   // perform a group of animations
})