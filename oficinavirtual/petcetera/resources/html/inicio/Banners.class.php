<?PHP
class Tips{
 

	 function getTip($TYPO3_db,$TYPO3_db_username,$TYPO3_db_password,$TYPO3_db_host){
		 $conn = mysql_connect($TYPO3_db_host, $TYPO3_db_username, $TYPO3_db_password); 
		mysql_select_db($TYPO3_db, $conn);

	
		$query="Select * from comunicacion_emexicabanners where status=1 order by sort_order;";
		$result = mysql_query($query);
		while ($row =  mysql_fetch_assoc($result)) {
			echo '<li><img src="../../comunicacion/emexica/banners/'.$row["imagen"].'" alt=""></li>';
		}
		mysql_close($conn);
		
	}
 function getAllTips($TYPO3_db,$TYPO3_db_username,$TYPO3_db_password,$TYPO3_db_host){
		$conn = mysql_connect($TYPO3_db_host, $TYPO3_db_username, $TYPO3_db_password); 
		mysql_select_db($TYPO3_db, $conn);
		$idtip=rand(1,31);
		$count=0;
		$query="select
id,
titulo,
preview,
fecha
from comunicacion_emexicacomunicados where active=1 ;";
		$result = mysql_query($query);
		while ($row =  mysql_fetch_assoc($result)) {
			$count++;
		echo 	"<p><strong class='font1'>".$row["titulo"]."</strong><br>
                  <span class='link2'>".$row["fecha"]."</span><br/>
				  ".$row["preview"]."
                  <strong class='font1'><a href='inicio2.php?id='".$row["id"].">Leer m&aacute;s</a></strong></p><br/>";
			
		}
		mysql_close($conn);
		
	}
 function getComunicado($TYPO3_db,$TYPO3_db_username,$TYPO3_db_password,$TYPO3_db_host,$id){
		$conn = mysql_connect($TYPO3_db_host, $TYPO3_db_username, $TYPO3_db_password); 
		mysql_select_db($TYPO3_db, $conn);
		$idtip=rand(1,31);
		$count=0;
		$query="select
id,
titulo,
comunicado,
fecha
from comunicacion_emexicacomunicados where id=".$id.";";
		$result = mysql_query($query);
		while ($row =  mysql_fetch_assoc($result)) {
		
		echo 	"    	<p><strong class='font1'>".$row["titulo"]."</strong><br/>
           	    <span class='link2'>".$row["fecha"]."</span></p>
              	<p><br>
				".$row["comunicado"]."
</p>";
			
		}
		mysql_close($conn);
		
	}
}

?>