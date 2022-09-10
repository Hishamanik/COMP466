<?php 

$dbHost = "localhost";
$dbName = "task1_db";
$dbUser = "root";
$dbPassword = "";

try {
  $dsn = "mysql:host=" . $dbHost . ";dbname=" . $dbName;
  $conn = new PDO($dsn, $dbUser, $dbPassword);
} 
catch(PDOException $e) {
  echo "DB Connection Failed: " . $e->getMessage();
}



 ?>
