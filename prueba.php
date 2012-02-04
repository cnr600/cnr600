<?php
$db_username = 'petceter_emexica';
$db_password = 'Catalogo1';
$db_host = 'localhost';
$db_name = 'petceter_emexica';
	$con = mysql_connect($db_host,$db_username,$db_password);	

	if (!$con)
	{
		die('No se puede conectar a la base de datos: ' . mysql_error());
	}
	else
	{
	
		mysql_select_db($db_name, $con);
			$idtip=rand(1,31);
		$sql="Select * from comunicacion_tips ;";
				
		$resultado = mysql_query($sql);

		
	if (!$resultado) {
    	die('Usuario sin Privilegios: ' . mysql_error());    	
	}
	else
	{		
		
		while (($row=mysql_fetch_assoc($resultado))!==false) 
		{
			echo $row["tip"];        	
    	}
    
    	mysql_free_result($resultado);
	
	}	
	
		mysql_close($con);
	}

?>