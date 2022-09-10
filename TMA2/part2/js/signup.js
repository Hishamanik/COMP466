function validate(){
var name=document.myform.name.value;
var yourpassword=document.myform.yourpassword.value;
var emailAddr=document.myform.emailAddr.value;
var status=false;

    if(name.length<1){
    document.getElementById("nameloc").innerHTML=
    "Please enter your name";
    status=false;
    }else{
    document.getElementById("nameloc").innerHTML=" ";
    status=true;
    }


    if(yourpassword.length<6){
    document.getElementById("passwordloc").innerHTML=
    "Password must be at least 6 char long";
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
