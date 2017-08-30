console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'Hi I am Avnish Ravindra Yadav';

//let us make image movable
 var img = document.getElementById ('img');
 
 var marginLeft = 0;
 function moveRight(){
     marginLeft = marginLeft+ 3;
     img.style.marginLeft = marginLeft + 'px';
 }
 img.onclick = function() {
     var interval= setInterval(moveRight,25);
 };
 
 // counter function
 var counter =0;
 button.onclick = function() {
   
   counter=counter+1;
   var span = document.getElementById('count');
   span.innerHTML = counter;
   
     
 };