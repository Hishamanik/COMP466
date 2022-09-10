<?php
require 'config.php';

if(isset($_POST)){
	$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
	$password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

	//fetch data by email id
	$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
	$stmt->execute([$email]); 
	$user = $stmt->fetch(PDO::FETCH_OBJ);

	//check data is
	if($user){
		if($user->password === $password){
			session_start();
			$_SESSION['user'] = $user;
			header("location:course_list.php");
		
		}else{
			header("location:login.php?msg=Invalid password");
		}
	}else{
		header("location:login.php?msg=Invalid email id");
	}
	

}
else{
	header("location:login.php?msg=You can't access without fill the form");
}
?>