<?php
require 'config.php';
$query = $conn->prepare("select * from courses");
$query->execute();
$result = $query->fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-learning</title>
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



  <center><img src="../images/banner.jpg" alt="Welcome image"><center>


  <section id="our_courses" style="padding: 20px 0px;">
    <div class="container">
      <div class="courses">
        <center><h1>Welcome to Online Learning</h1></center>
         <br>
         <br>

        <center><h1>Courses</h1></center>
        <br>
         <div class="courses_details">

           <div class="row">
            <?php foreach ($result as $course) {?>
             
             <div class="column">
                  <h1><?php echo $course->course_name;?></h1>
                  <p><?php echo $course->course_desc;?></p>
                  <a href="course_detail.php?id=<?php echo $course->id;?>" class="">Details</a>
             </div>
           <?php }?>

             
           </div>

         </div>
      </div>
    </div>
  </section>
