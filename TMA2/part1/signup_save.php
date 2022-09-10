<?php
require 'config.php';
if(isset($_POST['save'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$query = $conn->prepare("insert into users (name, email_id, password) values ('$name', '$email', '$password')");
	$query->execute();
	header("location:login.php");
}

?>