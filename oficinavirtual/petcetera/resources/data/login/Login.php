<?php
include ('../Db.class.php');
session_start();
class Login extends Db {

	function __construct() {
		parent::__construct();

	}

	function login($username, $password) {
		
		$existe;
		$count = "SELECT
					count(*) as count
					FROM  vendedores where idvendedor='" . $username . "' AND";
		 $query = "SELECT
		 			idvendedor,
					nombres,
					apaterno,
					password,
					(select estatus from vendedores_estatushistorial where vendedor=v.idvendedor order by created desc limit 1) as active
					FROM vendedores v where idvendedor='" . $username . "' AND";
		$result = $this -> getQuery($count);
		while($row = mysql_fetch_assoc($result)) {
			 $existe = $row["count"];
		}
		
		if($existe> 0) {
		
			$result = $this -> getQuery($query);
			while($row = mysql_fetch_assoc($result)) {
				
				if($row["idvendedor"] == $username && $row["password"] == $password) {
					if($row["active"] == 1) {
						//$_SESSION['usuario'] = $username;
						$_SESSION['vendedor'] = $row["idvendedor"];
						 $_SESSION['nombre']=$row["nombres"]." ".$row["apaterno"];
						 $queryAccess = "INSERT INTO vendedores_visits (idvendedor) values ('".$_SESSION['vendedor']."')";
						$result2=$this->getUpdateQuery($queryAccess);
						echo "{success: true}";
					} else {
						echo "{success: false, errors: { reason: 'El usuario se encuentra desactivado, favor de comunicarse a atenci&oacute;n a clientes }}";
					}
				} else {
					echo "{success: false, errors: { reason: 'Usuario o password incorrectos, por favor intente nuevamente.' }}";
				}
			}
		}else{
			echo "{success: false, errors: { reason: 'Usuario o password incorrectos, por favor intente nuevamente.' }}";
		}

	}

}

$loginUsername = isset($_POST["loginUsername"]) ? $_POST["loginUsername"] : "";
 $loginPassword = isset($_POST["loginPassword"]) ? $_POST["loginPassword"] : "";
$login = new Login();
$login -> login($loginUsername, md5($loginPassword));

?>