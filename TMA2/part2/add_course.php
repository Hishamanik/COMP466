<?php
require'config.php';

//check form is submitted
if(isset($_POST['save'])){
  $courseName = $_POST['courseName'];
  $shortDescription = $_POST['shortDescription'];
  //aad course data in table
  $query = $conn->prepare("insert into courses (course_name, course_desc) values 
    ('$courseName', '$shortDescription')");
  $query->execute();
  header("location:course_list.php");
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add new Course</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>

  <header>
    <div class="container">
      <div class="navigation_bar">

    <div class="logo">
       <a href="index.php">
        <img src="../images/online_course.png" alt="" width="80" height="80">
       </a>
     </div>

     <div class="header_right_data">
       <a href="login.php" class="my_button">LOGIN</a>
       <a href="signup.php" class="my_button">SIGN UP</a>
     </div>

     </div>

     </div>
  </header>

  <section style="padding: 20px 0px; textalign: center;">
    <div class="container">
      <div class="signup">
        <h1 style="text-align: center;">Add a new Course</h1>

        <form name="myform" action="#" method="post" onsubmit="return myValidate()">

          <div class="my_form">
            <label for="courseName">Course Name</label> <br>
            <input type="text" placeholder ="PHP" id="courseName" name="courseName" value=""><br>
            <span id="courseTex" class="text-danger"> </span>
          </div>

          <div class="my_form">
            <label for="shortDescription">Short description</label> <br>
            <textarea name="shortDescription" placeholder ="e.g This course teaches you PHP tool.." id="shortDescription" value="" rows="6" cols="40"></textarea><br>
            <span id="shortDescriptiontex" class="text-danger"> </span>
          </div>


          <div class="my_form">
            <button type="submit" class="" id="submit" name="save">Submit</button>
          </div>

        </form>
      </div>
    </div>
  </section>


  <script src="./js/createcourse.js"> </script>

  </body>
</html>
