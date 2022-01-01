
  function loginfunc() {

    var validname = /^[a-zA-Z0-9]+$/;
  
    if (!(document.getElementById("name").value.match(validname))) {
  
      alert("Invalid username!");
  
      document.getElementById("name").focus();
      return false;
    }
    else if(document.getElementById("pw").value.length==0)
    {
      alert("Password cannot be blank!");
      document.getElementById("pw").focus();
      return false;
    }
    else return true;
  }
  function signupfunc() {
  
    var validpw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{8,15}$/;
    var validmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\.[a-zA-Z0-9-]+)$/;
    var validname = /^[a-zA-Z0-9]+$/;
    if(document.getElementById("uname").value.length==0)
    {
      alert("Username cannot be blank!");
      document.getElementById("uname").focus();
     
    }
    else if (!(document.getElementById("uname").value.match(validname))) {
  
      alert("Username must contain at least 1 lowercase letter, 1 uppercase letter and a number!");
  
      document.getElementById("uname").focus();
      
     }
    else if (!(document.getElementById("mail").value.match(validmail))) {
  
      alert("Invalid email address!");
  
      document.getElementById("mail").focus();
      
    }
   else if(document.getElementById("psw").value.length==0){
     alert("Password cannot be blank!");
     document.getElementById("psw").focus();
    
   }
  
    else if(!(document.getElementById("psw").value.match(validpw))) {
      alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and it should be 8-15 characters long.")
      document.getElementById("psw").focus();
      
    }
  
   else 
   alert("You are signed in!");
   }
   filterSelection("all") // Execute the function and show all columns
   function filterSelection(c) {
     var x, i;
     x = document.getElementsByClassName("column");
     if (c == "all") c = "";
     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
     for (i = 0; i < x.length; i++) {
       w3RemoveClass(x[i], "show");
       if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
     }
   }
   
   // Show filtered elements
   function w3AddClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
       if (arr1.indexOf(arr2[i]) == -1) {
         element.className += " " + arr2[i];
       }
     }
   }
   
   // Hide elements that are not selected
   function w3RemoveClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
       while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
       }
     }
     element.className = arr1.join(" ");
   }
   
   // Add active class to the current button (highlight it)
   var btnContainer = document.getElementById("myBtnContainer");
   var btns = btnContainer.getElementsByClassName("btn");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function(){
       var current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(" active", "");
       this.className += " active";
     });
   }