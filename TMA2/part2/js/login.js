function myValidate(){
  var yourpassword=document.myform.password.value;
  var emailAddr=document.myform.email.value;
  var status=false;

  if(yourpassword.length < 5){
    document.getElementById("passwordloc").innerHTML="Password must be at least 6 char long";
    status=false;
  }else{
    document.getElementById("passwordloc").innerHTML=" ";
    status=true;
  }

    // validate Email

    var emailAddr = document.getElementById('emailAddr').value;
    if(emailAddr == ''){
     document.getElementById("emailid").innerHTML="Please enter your email address";
     status=false;
   }else{
    document.getElementById("emailid").innerHTML=" ";
    status=true;
  }

  return status;
}
