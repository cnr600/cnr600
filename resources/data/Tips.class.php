<?PHP
include ('Db.class.php');
class Tips extends Db{

 function getTip(){
		
		$idtip=rand(1,50);
	
		$query="Select * from comunicacion_tips ORDER BY RAND() LIMIT 0,1;";
		$result=$this->getUpdateQuery($query);
		while ($row =  mysql_fetch_assoc($result)) {
			$tip=$row["tip"];
		echo $tip=substr($tip, 1, -1);
		}
	
		
	}
  function getBanners(){
		
		$idtip=rand(1,50);
	
		$query="Select * from comunicacion_websitebanners where status=1 ORDER BY sort_order ASC";
		$result=$this->getUpdateQuery($query);
		while ($row =  mysql_fetch_assoc($result)) {
			$imagen=$row["imagen"];
		echo '<li><img src="resources/images/'.$imagen.'" alt=""></li><br/>';
		}
	
		
	}
 function getAllTips(){
	    $query="Select tip from comunicacion_tips where active=1 ;";
		$result=$this->getQuery($query);
		$rows = Array();
	
		$idtip=rand(1,31);
		$count=0;
		$bg=0;
		
		mysql_set_charset("latin1");
		$result = mysql_query($query);
	
	while ($row =  mysql_fetch_assoc($result)) {
			$count++;
		$tip=$row["tip"];
		$tip=substr($tip, 1, -1);
		echo 	"<div class='wrapper pad_top1'>
					<div class='marg_right1'><ul><li></li></ul>
						<ul>
						  <li></li>
					  </ul>
						<p class='font1'>Tip ".$count."</p>";
						if($bg==0){
							$bg=1;
							
							
							echo "<p class='colorClass04'>".$tip."</p>";
							}else if($bg==1){
								echo "<p class='tipsColor02'>".$tip."</p>";
								$bg=0;
								}else if($bg==1){
								echo "<p class='tipsColor02'>".$tip."</p>";
								$bg=0;
								}
						
				echo	"</div>
				</div>";
			
		}
		
	}

}

?>