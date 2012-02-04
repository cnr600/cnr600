<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Prueba de correo</title>
</head>

<body>
<?php
$to = "cesar.nava@iphoenix.mx,cnr600@hotmail.com";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "test@catalogopetcetera.com";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>
</body>
</html>