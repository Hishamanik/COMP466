<? php


	try{

		$dsn = "";
		$user = "";
		$pswd="";

		$conn = new PDO($dsn, $user, $pswd);
		$conn-> query("USE signuplogin");
	}
	catch(PDOException $e){
		die("Error Connection: ".$e->getMessage());
	}

?>