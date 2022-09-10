<?php
session_start();
if(!$_SESSION['user']){
    header("location:login.php");
}
$pageTitle ="Bookmarking List";
include 'header.php';
require 'config.php';
$query = $conn->prepare("select * from bookmarkings");
$query->execute();
$result = $query->fetchAll(PDO::FETCH_OBJ);

?>
<section>
	<div>
		<h1 class="heading">List of Bookmarks</h1>
	</div>
  <center><div class="ml-20 mr-20">
    <a href="add_new.php">Add a new bookmark</a></center>
    <br>
    <table>
    <thead>
      <th></th>
      <th>Bookmark Links</th>
    </thead>
    <tbody>
      <?php foreach ($result as $key => $row) {?>
       <tr>
         <td><?php echo $key;?></td>
        <td><a href="<?php echo $row->website_link;?>" target="_blank"><?php echo $row->website_link;?></a></td>
       </tr>
      <?php }?>
    </tbody>
  </table>
  </div>
</section>