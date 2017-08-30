console.log('Loaded!');

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
 
 //submit name
 
 var nameInput= document.getElementById('name');
 var name= nameInput.value;
 var submit= document.getElementById('submit-btn');
 submit.onclick = function() {
   
   var names =[name1,name2,name3];
   var list ="";
   for(var i=0;i<names.length;i++){
     list += "<li>"+ names[i]+"</li>";
   }
     
 };
 
 var ul= document.getElementById('namelist').innerHTML=list;
 
 
 
 
 