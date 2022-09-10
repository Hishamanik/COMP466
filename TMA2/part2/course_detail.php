<?php
require 'config.php';
$id=$_GET['id'];
$query = $conn->prepare("select * from courses where id='$id'");
$query->execute();
$course = $query->fetch(PDO::FETCH_OBJ);

$query1 = $conn->prepare("select * from course_topics where course_id='$id'");
$query1->execute();
$topics = $query1->fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Detail</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>

  <header>
    <div class="container">
      <div class="navigation_bar">

     <div class="logo">
       <a href="index.php">
         <img src="../images/e-learning.png" alt="" width="260">
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
        <h1><?php echo $course->course_name;?></h2>
        <p><?php echo $course->course_desc;?></p>
        <br />
        <hr />
         <br />
        <h2>Course Topics</h4>
          <br />
<?php
foreach ($topics as $key => $topic) {?>
 <h3><?php echo $key+1;  echo ". ".$topic->topic_name;?></h3>
  <br />

 <p><?php 
 echo $topic->description;
 ?></p>
  <br /> <br />
<?php }
?>
    </div>
  </section>

  <footer>
    <h6>© 2022 E-learning. All Rights Reserved.</h6>
  </footer>
  </body>
</html>
