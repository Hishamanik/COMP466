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
       <a href="login.php" class="my_button">LOG In</a>
       <a href="signup.php" class="my_button">SIGN UP</a>
     </div>


     </div>

     </div>
  </header>

  <section style="padding: 20px 0px; textalign: center;">
    <div class="container">
      <div class="signup">
        <h1 style="text-align: center;">LOG IN</h1>
        <center><p>(For existing Users)</p></center>
        <br>

        <form name="myform" action="login_check.php" method="post" onsubmit="return myValidate()">

          <div class="my_form">
            <center><label for="emailAddr">Email</label></center> 
            <input type="email" placeholder="User123@gmail.com" id="email" name="email" value=""><br>
            <span id="emailid" class="text-danger"> </span>
          </div>

          <div class="my_form">
          <center><label for="yourpassword">Password</label><center>
            <input type="password" placeholder="User123456789@" name="password" value=""><br>
            <span id="passwordloc" class="text-danger"> </span>
          </div>


          <div class="my_form">
            <button type="submit" class="" id="submit" value="register" onclick="myValidate()">Log in</button>
          </div>

        </form>
      </div>
    </div>
  </section>


<script src="./js/login.js"></script>

  </body>
</html>
