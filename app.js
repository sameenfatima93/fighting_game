// var char1 = document.getElementById("char1");
// var char2 = document.getElementById("char2");
// var left = 0;
// function animateCharacter() {
//   console.log(event.keyCode);
//   if (event.keyCode === 68) {
//     left = left + 10;
//     char1.style.left = left + "px";
//     char1.style.left= (char1.offsetLeft+10)+"px"
//     char1.src = "images/alicewf.gif";
//     char1.style.transform = "scaleX(1)";
//      char1.style.height = "200px"
//   }

//   if (event.keyCode === 65) {
//     left = left - 10;
//     char1.style.left = left + "px";
//     char1.style.left= (char1.offsetLeft+10)+"px"
//     char1.src = "images/alicewf.gif";
//     char1.style.transform = "scaleX(-1)";
//      char1.style.height = "200px"
//   }
//   if (event.keyCode === 32) {
//     char1.src = "images/alice12.gif";
//     setTimeout(() => {
//       char1.src = "images/alicestance.gif";
//     }, 2500);
//   }
//   if (event.keyCode === 74) {
//     left = left + 10;
//     char2.style.right = left + "px";
//     char1.style.left= (char1.offsetLeft+10)+"px"
//     char2.src = "images/venom-crawl.gif";
//     char2.style.transform = "scaleX(-1)";
//     char2.style.height = "150px";
//     setTimeout(() => {
//       char2.src = "images/venom-k.gif";
//       char2.style.height = "300px";
//     }, 500);
//   }
// }
// window.onkeydown = animateCharacter;




var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0
let left2 = 1000;
//sb sy pehly id so get krna hy_____ //
//phir function banana hy______//

function charecterAnimation(event){
console.log(event.keyCode)  
if(event.keyCode === 68){
left = left + 30 ;
char1.style.left = left + "px"
 char1.src="images/move1.gif";
  char1.style.transform = "scaleX(1)";
 }
 if(event.keyCode===65){
 left = left - 30;
 char1.style.left = left + "px";
char1.style.transform = "scaleX(-1)";
 }
if (event.keyCode === 32) {
    char1.src = "images/move2.gif"
    setTimeout(() => {
        char1.src = "images/charector1.gif"
        
    }, 2500); 
}
 if (event.keyCode === 37) {
    left2 -= 30; // move left
    char2.style.left = left2 + "px";
    char2.src = "images/charector 2.gif"; // your attack gif
    char2.style.transform = "scaleX(-1)";
    char2.style.height = "200px";
   
  }
  if (event.keyCode === 39) {
    left2 += 30; // move left
    char2.style.left = left2 + "px";
    char2.src = "images/charector 2.gif"; // your attack gif
    char2.style.transform = "scaleX(1)";
    char2.style.height = "200px";
   
  }
  if (event.keyCode === 188) {
  // Move left only if not already at edge
  if (left2 > 100) { // set 100px as minimum limit
    left2 -= 10;
  }

  char2.style.left = left2 + "px";
//   char2.src = "images/ch-move2.gif";
  char2.style.transform = "scaleX(-1)";
  char2.style.height = "200px";

  setTimeout(() => {
    // char2.src = "images/ch-move2.gif";
    char2.src = "images/ch-move3.gif";
    // char2.style.height = "150px";
  }, 2000);
}


// if(event.keyCode === 37){
// right = right + 20 ;
// char1.style.right = right + "px"
//  char1.src="images/charector2.gif";
//   char1.style.transform = "scaleX(-1)";
//  }
//  if(event.keyCode===39){
//  right = right - 20;
//  char1.style.right = right + "px";
// char1.style.transform = "scaleX(1)";
//  }
// if (event.keyCode === 32) {
//     char1.src = "images/ch-move3.gif"
//     setTimeout(() => {
//         char1.src = "images/chstand.gif"
        
//     }, 2500); 
// }

}
window.onkeydown = charecterAnimation;
//3rd number sb sy pehly function ko call krna hy with onkeydown ky is key ky press pr ye kam ho_____///
















