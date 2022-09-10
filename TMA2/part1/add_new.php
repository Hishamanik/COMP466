<?php
session_start();
if(!$_SESSION['user']){
    header("location:login.php");
}
$pageTitle ="Add new bookmark";
include 'header.php';
require 'config.php';
if(isset($_POST['save'])){
  $website_link = $_POST['website_link'];
  $query = $conn->prepare("insert into bookmarkings (website_link) values ('$website_link')");
  $query->execute();
  header("location:bookmarking.php");
}


?>
<!-- login form -->
<section>
	<div>
		<h1 class="heading">Add a New Bookmark</h1>
	</div>
  <div class="ml-20 mr-20">
  <form action="#" method="POST" name="myForm" onsubmit="return validateForm()">
    <label>Website link</label>
    <input type="text" placeholder="Ex. https://www.website.com" id="website_link" name="website_link">
    
    <input type="submit" value="Submit" name="save" >
    
  </form>

  </div>
	
</div>

</section>

</div>
<script type="text/javascript" src="js/add_website.js"></script>
</body>
</html>