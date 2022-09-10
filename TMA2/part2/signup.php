<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online learning</title>
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
       <a href="login.php" class="my_button">LOG IN</a>
       <a href="signup.php" class="my_button">SIGN UP</a>
     </div>


     </div>

     </div>
  </header>

  <section id="mysignup">
    <div class="container">
      <div class="signup">
        <h1 style="text-align: center;">Sign up</h1>
        <center><p>(For new Users)</p></center>
        <form name="myform" action="signup_save.php" method="post" onsubmit="return validate()">

          <center>
            <div class="my_form">
            <label for="name">Name</label> <br>
            <input type="text" placeholder="User" name="name" value=""><br>
            <span id="nameloc" class="text-danger"> </span>
          </div>
          <center>

          <center>
          <div class="my_form">
            <label for="emailAddr">Email</label> <br>
            <input type="email" placeholder="User123@gmail.com" id="emailAddr" name="emailAddr" value=""><br>
            <span id="emailid" class="text-danger"> </span>
          </div>
          </center>

          <center>
          <div class="my_form">
            <label for="yourpassword">Password</label> <br>
            <input type="password" placeholder="User123456789@" name="yourpassword" value=""><br>
            <span id="passwordloc" class="text-danger"> </span>
          </div>
          <center>
          <!-- <div class="my_form">
            <label for="confirmpassword">Confirm Password</label> <br>
            <input type="password" name="confirmpassword" value=""> <br>
            <span id="passwordcon" class="text-danger"> </span>
          </div> -->

          <div class="my_form">
            <button type="submit" class="" id="submit" name="save">Submit</button>
          </div>

        </form>
      </div>
    </div>
  </section>


  <script src="./js/signup.js">  </script>

  </body>
</html>
