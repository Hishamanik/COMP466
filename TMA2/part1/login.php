<?php
$pageTitle ="Login";
include 'header.php';
?>

<section>
	<div>
		<h1 class="heading">LOGIN</h1>
    <center><p>(For existing Users)</p></center>
	</div>
	<div class="form">
  <form action="login_exec.php" method="POST" onsubmit ="validateEmail()">
    <label>Email</label>
    <input type="email" placeholder="e.g user@gmail.com" id="email" name="email" >
    <label>Password</label>
    <input type="password"  placeholder="e.g User123@" name="password" id="password">
    <input type="submit" value="Login" name="save" >
   
  </form>
</div>

</section>
<!-- <div class="create"> 
  <p class="error"><?= (!empty($_GET['msg'])) ? $_GET['msg']:"";?></p>
<a href="signup.php" class="account">New Users? (Create an account)</a>
</div>
</body>
</html> -->