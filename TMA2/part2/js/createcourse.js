function myValidate(){

 var courseName = document.getElementById("courseName").value;
 var shortDescription = document.getElementById("shortDescription").value;
  if(courseName == ""){
   document.getElementById("courseTex").innerHTML="Please enter course name!";
  }else{
  document.getElementById("courseTex").innerHTML=" ";
  }
  if(shortDescription == ""){
    document.getElementById("shortDescriptiontex").innerHTML="Please enter short description";
  }else{
    document.getElementById("shortDescriptiontex").innerHTML=" ";
  }
  if(courseName == "" || shortDescription == ""){
    return false;
  }else {
    return true;
  }

}
