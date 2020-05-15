
//taking the total count of drums.
var numberOfDrums = document.querySelectorAll(".drum").length;

//adding the eventlistener to drum buttons and binding the function.
for(var i = 0 ; i < numberOfDrums ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        //from this keyword we can get which button was pressed.
        var name = this.innerHTML;

        playSound(name);  
        buttonAnimation(name);        
       
    });

}


//adding event listener to our keys of keyboard.
document.addEventListener("keydown",function(event){

    var keyPressed = event.key;
    playSound(keyPressed);          
    buttonAnimation(keyPressed);

});



//switch case to play sound according to key and button pressed.
function playSound(nameOfLetter){

    switch (nameOfLetter) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
            case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
            case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
            case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
            case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            break;
    }
}

//Adding the animation to website

function buttonAnimation(currentKey){

    //in this we have selected the drums by its class
    var activeButton = document.querySelector("."+currentKey);

    //from this we can add the css class to our button
    activeButton.classList.add("pressed");

     //after 100 milisecond we will remove that class so this will look like animation.
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}