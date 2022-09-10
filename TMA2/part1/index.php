<?php
$pageTitle ="Bookmarking website";
include 'header.php';
require 'config.php';
$query = $conn->prepare("select * from bookmarkings limit 10");
$query->execute();
$result = $query->fetchAll(PDO::FETCH_OBJ);

?>
<!-- login form -->
<div>
  <img src="../images/welcome.jpg" class="banner_img">
</div>
<section>

	<div>
		<h1 class="heading">Top 10 bookmarking website</h1>

	</div>
  <div class="ml-20 mr-20">
    <table>
    <thead>
      <th>S.No</th>
      <th>Website link</th>
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
	
</div>

</section>

</div>
</body>
</html>