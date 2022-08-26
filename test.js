var colorChanger = document.querySelector("#color-changer");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;

function changeColor(){

    if(counter >= colors.length){
        counter = 0;
    }

    colorChanger.style.background = colors[counter];
    counter++;

}

var MyTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function(){

    clearInterval(MyTimer);
    colorChanger.innerHTML = "Timer stopped"

}