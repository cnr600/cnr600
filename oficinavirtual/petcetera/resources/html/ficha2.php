<?PHP session_start();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style type="text/css">
#apDiv1 {
	position:absolute;
	width:200px;
	height:30px;
	z-index:1;
	left: 367px;
	top: 247px;
}
#apDiv2 {
	position:absolute;
	width:200px;
	height:26px;
	z-index:2;
	left: 243px;
	top: 287px;
}
</style>
</head>

<body>
	<FORM>
<INPUT TYPE="button" onClick="window.print()" value="Imprimir">
</FORM>
<div id="apDiv1"><strong>$<?PHP echo $_GET["total"];?></strong></strong></div>
<table width="755" border="0">
  <tr>
    <td width="755" height="299" align="left" valign="bottom" background="../images/pagos/FichaDeposito.png"><p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <div id="apDiv2"><strong><?PHP echo $_SESSION["idpedido"];?></strong></div>
    <p>&nbsp;</p>
    <p>&nbsp;</p></td>
  </tr>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</body>
</html>