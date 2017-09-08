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
 

 
 //submit usernmae/password
 
 var submit= document.getElementById('submit-btn');
 submit.onclick = function() {
   
     //create a request variable
     var request = new XMLHttpRequest();
     
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             
             if(request.status ===200){
                 
                 console.log('user logged in!');
                 alert('logged in successfully');
             }
             else if(request.status===403){
                 alert('username/password incorrect');
             }
             else if(request.status===500){
                 alert('some error occured on server');
             }
         }
     };
    //make a request
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
     request.setRequestHeader('Content-Type','application/json');
   request.open('POST','http://avnishy44.imad.hasura-app.io/login',true);
   request.send(JSON.stringify({username:username,password:password}));
  
 
 };
 
 
 
 
 