<?PHP
class Tips{
 

	 function getTip($TYPO3_db,$TYPO3_db_username,$TYPO3_db_password,$TYPO3_db_host){
		 $conn = mysql_connect($TYPO3_db_host, $TYPO3_db_username, $TYPO3_db_password); 
		mysql_select_db($TYPO3_db, $conn);

	
		$query="Select * from comunicacion_oficinavirtualbanners where status=1 order by sort_order;";
		$result = mysql_query($query);
		while ($row =  mysql_fetch_assoc($result)) {
			echo '<li><img src="../comunicacion/banners/'.$row["imagen"].'" alt=""></li>';
		}
		mysql_close($conn);
		
	}
 function getAllTips($TYPO3_db,$TYPO3_db_username,$TYPO3_db_password,$TYPO3_db_host){
		$conn = mysql_connect($TYPO3_db_host, $TYPO3_db_username, $TYPO3_db_password); 
		mysql_select_db($TYPO3_db, $conn);
		$idtip=rand(1,31);
		$count=0;
		$query="Select * from comunicacion_tips ;";
		$result = mysql_query($query);
		while ($row =  mysql_fetch_assoc($result)) {
			$count++;
		echo 	"<div class='wrapper pad_top1'>
					<div class='marg_right1'><ul><li></li></ul>
						<ul>
						  <li></li>
					  </ul>
						<p class='font1'>Tip ".$count."</p>
						<p>".$row["tip"]."</p>
					</div>
				</div>";
			
		}
		mysql_close($conn);
		
	}

}

?>