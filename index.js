var drumLength=document.querySelectorAll(".drum").length;

for(var i=0;i<drumLength;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  var drumName=this.innerHTML;
  makeSound(drumName);
  var flag=1;
  colorchange(drumName,flag);
//  animate(drumName);

}


)
}



document.addEventListener("keypress",function(event)

{

var drumKey=event.key;
makeSound(drumKey);

  colorchange(drumKey);
}




)

function makeSound(key)
{  


  switch (key) {
    
      case "w":
        //var sound=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
      //sound.play();
        //alert("i m w");
         
      break;

      case "a":
          
       // var sound2=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
        //sound2.play();
        //alert("i m a");
      break;

      case "s":
        //var sound3=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
        //sound3.play();
        //alert("i m s");
      break;

      case "d":
        //var sound4=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
        //sound4.play();
       // alert("i m d");
      break;

      case "j":
        //var sound5=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
        //sound5.play();
        //alert("i m j");
      break;

      case "k":
        //var sound6=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
        //sound6.play();
        //alert("i m k");
      break;

      case "l":
       //var sound7=new Audio("D:\webudemy\Drum Kit Starting Files\sounds\tom-1.mp3");
        //sound7.play();
        //alert("i m l");
      break;
    default:
      console.log(key);
      break;
  }
}

// function animate(classDrumName )
// { classDrumName=documnet.querySelector("."+classDrumName);
// //yaha mere pass class hai in classdrumname me to hm yaha ku documnet use karenge 
// classDrumName.classList.add(".pressed");
//   setTimeout(function(){
//     classDrumName.classList.remove("pressed");
// },100);
// }

function colorchange(value,flg)
{value=document.querySelector("."+value);
console.log(value.classList);
 value.style.color="black";
         setTimeout(function()
         {
          value.style.color="#DA0463";
         },100)
         
}