 function validateEmail() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pass =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

    //if email format match
    if (name == "" && email == "") {
        alert("Please fill out the form information correctly");
        return false;
    } 
    else if (email.match(mailformat) && password.match(pass)) {
        return true;

    } 
    else {
        alert("You have entered an invalid email address or password!");
        return false;
    }
}
