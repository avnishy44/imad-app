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
 var button = document.getElementById('counter');
 var counter =0;
 button.onclick = function() {
     //create a request
   
   var request= new XMLHttpRequest();
   
   //capture the response and store it in a variable
   
   request.onreadystatechange=function(){
       
       if(request.readyState===XMLHttprequest.DONE){
           if(request.status ===200){
                var counter= request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
           }
       }
   };
   
   //make a request
   request.open('GET','http://avnishy44.imad.hasura-app.io/counter',true);
   request.send(null);
  
   
     
 };