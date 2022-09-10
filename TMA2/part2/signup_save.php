<?php
require 'config.php';
if(isset($_POST['save'])){
	$name = $_POST['name'];
	$email = $_POST['emailAddr'];
	$password = $_POST['yourpassword'];
	$query = $conn->prepare("insert into users (user_name, email, password) values ('$name', '$email', '$password')");
	$query->execute();
	header("location:login.php");
}

?>