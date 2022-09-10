function Validate(){

var courseType = document.getElementById("courseType").value;
var topicName = document.getElementById("topicName").value;
var topicDetails = document.getElementById("topicDetails").value;
    if (courseType == "") {
      document.getElementById("texcourseType").innerHTML="Please select an option!";
    }
    else{
      document.getElementById("texcourseType").innerHTML="";
    }
    if (topicName == "") {
      document.getElementById("topicTex").innerHTML="Please enter topic name!";
    }
    else{
      document.getElementById("topicTex").innerHTML="";
    }
    if (topicDetails == "") {
      document.getElementById("topicDetTex").innerHTML="Please fill the detail!";
    }
    else{
      document.getElementById("topicDetTex").innerHTML="";
    }
     if (courseType == "" || topicName == "" || topicDetails == "") {
return false;
     }
    return true;

  }
