
/* Make sound when clicking a picture */
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){     // loop through each button with class "drum"
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){     // add "click" event listener
        var buttonInnerHTML = this.innerHTML;       // get letter inside of the button
        makeSound(buttonInnerHTML);                 // pass letter to "makeSound" function
    });
}

/* Make sound when typing a key */
document.addEventListener("keydown", function(event){   // add "keydown" event listener to the document to sense when a key is pressed
    makeSound(event.key);   // event.key checks the event for which key was pressed. pass that letter to "makeSound" function
});

/* Make sound function */
function makeSound(key){
    var audio;

    switch(key){    // set audio file depending on letter
        case "w": audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a": audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s": audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d": audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j": audio = new Audio("sounds/snare.mp3");
            break;
        case "k": audio = new Audio("sounds/crash.mp3");
            break;
        case "l": audio = new Audio("sounds/kick-bass.mp3");
            break;
    }

    audio.play();   // play audio file
}