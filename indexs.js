
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML= this.innerHTML;

makeSound(buttonInnerHTML);

buttonanimation(buttonInnerHTML);

});
}
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonanimation(event.key);

});
//keyboard press
function makeSound(key)
{

  switch(key){
    case "w":
       var audio = new Audio("tom-1.mp3");
       audio.play();
    break;
    case "a":
       var audio1 = new Audio("tom-2.mp3");
       audio1.play();
    break;
    case "s":
       var audio2 = new Audio("tom-3.mp3");
       audio2.play();
    break;
    case "d":
       var audio3 = new Audio("tom-4.mp3");
       audio3.play();
    break;
    case "j":
       var audio4 = new Audio("crash.mp3");
       audio4.play();
    break;
    case "k":
       var audio5 = new Audio("kick-bass.mp3");
       audio5.play();
    break;
    case "l":
       var audio6 = new Audio("snare.mp3");
       audio6.play();
    break;
    default:console.log(buttonInnerHTML);
  }

}
function buttonanimation(currentkey)
{
  var activebutton=document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function()
{
  activebutton.classList.remove("pressed");
},100 );
}
//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
