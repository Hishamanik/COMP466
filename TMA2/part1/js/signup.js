function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pw1 = document.getElementById("pswd1").value;  
    var pw2 = document.getElementById("pswd2").value;  
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //if email format match
    if (name == "" && email == "") {
        alert("Please fill out the form information correctly");
        return false;
    } 
    else if (pw1 == "" && pw2 =="") {
        alert("Please Enter Your Password and Confirm it!")
        return false;
      }

    else if (!email.match(mailformat) && (pw1 !== pw2)) {
       alert("Please Enter the correct information")
       return true;
    }
   
     else{
        return true;
    }
}



