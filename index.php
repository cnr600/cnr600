<?PHP include("resources/data/Tips.class.php");

?>
<!DOCTYPE html>
<html>
<head>
<title>Inicio</title>
 <?php include_once("seguimientoanalytics.php");?>
<style type="text/css">
.colorClass01 {
	
	font-size: medium;
	color: #666666;
}
.tipsColor02 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #FFF;
	background-color: #0daf2b;
}
.colorClass03 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #4f3324;
}
.colorClass04 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #FFF;
	background-color: #4f3324;
}
</style>
<meta charset="latin1">
<meta name="keywords" content="Juguetes, perro, Mascotas,Juegos,perros,Pelota,Camas,Correas,Collares,Juguetes,gato,Areneros,Platos,Accesorios,mascotas
Tapete perro,Ropa perro,Moda canina,Accesorios perro,México,Accesorios gato
,Accesorios mascotas,Bolsas popo perro,Amo responsable,Tips perros,Tips mascotas,Pet,Salud perro,Cuidado mascotas,Mejores precios,Catálogo,Tu propio negocio,Gana dinero,Venta directa 
" />
<link rel="stylesheet" href="resources/css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="resources/css/layout.css" type="text/css" media="all">
<link rel="stylesheet" href="resources/css/style.css" type="text/css" media="all">
<script type="text/javascript" src="resources/js/jquery-1.6.js"></script>
<script type="text/javascript" src="resources/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="resources/js/tms-0.3.js"></script>
<script type="text/javascript" src="resources/js/tms_presets.js"></script>
<script type="text/javascript" src="resources/js/script.js"></script>
<script src="SpryAssets/SpryAccordion.js" type="text/javascript"></script>
 
<!--[if lt IE 9]>
	<script type="text/javascript" src="js/html5.js"></script>
	<style type="text/css">
		#menu a, .bg, .bg2, #ContactForm a {behavior:url(js/PIE.htc)}
	</style>
<![endif]-->
<!--[if lt IE 7]>
	<div style='clear:both;text-align:center;position:relative'>
		<a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.com/images/upgrade.jpg" border="0" alt="" /></a>
	</div>
<![endif]-->
<link href="SpryAssets/SpryAccordion.css" rel="stylesheet" type="text/css">

</head>
<body id="page1">
<div class="body1">
	<div class="main">
<!--header -->
		<header>
			<div class="wrapper"> <a href="index.php" id="logo">#</a>
<nav>
<ul id="menu">
<li class="active"><a href="index.php">Inicio</a></li>
<li><a href="innovando.php">¿Innovando con pasi&oacute;n?</a></li>
<li><a href="catalogo/" target="_new">Cat&aacute;logo</a></li>
<li><a href="noticias.php">Noticias</a></li>
<li><a href="oficinavirtual/">Oficina virtual</a></li>
<li><a href="tips.php">Tips</a></li>
<li><a href="contacto.php">Cont&aacute;ctanos</a></li>
</ul>
</nav>
</div>
			<div class="slider_bg">
				<div class="slider">
					<ul class="items">
						<?PHP $treeDataModel1 = new Tips;
$treeDataModel1 ->getBanners();?>

				
					</ul>
				</div>
			</div>
</header>
		<div class="ic"></div>
<!-- / header -->
<!-- content -->
		<article id="content"></article>
	</div>
</div>
<div class="body2">
	<div class="main">
		<article id="content2">
			<div class="wrapper"><span class="font1 color2"><a href="mailto:direccion@catalogopetcetera.com"></a></span>
			  <section class="col2">
		        <h4><img src="resources/images/tips.png" width="100" height="42"></h4>
			    <div class="testimonials">
				  <p class="quot"><?PHP $treeDataModel = new Tips;
$treeDataModel ->getTip('petceter_emexica','petceter_emexica','Catalogo1','localhost');?></p>
		          <p class="font1 color2"><a href="resources/noticias/boletin1.pdf" target="_new">Bolet&iacute;n 1: Ayudando con pasi&oacute;n</a><br/>
                  <span class="colorClass01">Petcetera apoyó a Fundación TOMY realizando una campaña para donar cobijas a los miembros de la comunidad de Santiago Oxthoc.</span></p>
<p class="font1 color2">&nbsp;</p>
			    </div>
				  <div class="wrapper">
					  <section class="col4">
						  <ul class="list1">
							  <li></li>
							  <li></li>
						  </ul>
					  </section>
					  <section class="col4 pad_left1">
						  <ul class="list1">
							  <li></li>
						  </ul>
					  </section>
			    </div>
			  </section>
			  <section class="col3 pad_left2">
		        <h4>&nbsp;</h4>
				<div class="wrapper pad_top1" >
					  <figure class="left marg_right1" ><a href="consolo100.php" ><img src="resources/images/alerta.gif" alt="" width="90" height="90"></a></figure>
						<p><span class="font1 color2">Con solo $100</span><br>
							Mejora tus ingresos y logra tu independencia financiera.
<a href="consolo100.php" class="link1">Leer Mas</a>
						</p>
				</div>
					<div class="wrapper">
						<figure class="left marg_right1"><a href="http://www.fundaciontomy.org" target="_new"><img src="resources/images/tomy.jpg" alt="" width="90"></a></figure>
					  <p><span class="font1 color2">Fundaci&oacute;n TOMY</span><br>
						  Con la compra de nuestros productos apoyas a la fundaci&oacute;n TOMY
						  . &nbsp;<a href="http://www.fundaciontomy.org/" class="link1">Leer Mas</a></p>
					  <p>&nbsp;</p>
					  <p><a href="mailto:direccion@catalogopetcetera.com"><img src="resources/images/contactodireccion.png" alt="Contacto" width="220" height="80"></a></p>
                </div>
			  </section>
		  </div>
		</article>
<!-- / content -->
	</div>
</div>
<div class="main">
<!-- footer -->
	<footer>
		<div class="wrapper">
			<section class="col2">
				<div class="wrapper">
					<section class="col4">
					  <ul id="icons">
					    <li><a href="https://www.facebook.com/pages/cat%C3%A1logo-petcetera/130071893731596?sk=wall" target="_blank"><img src="resources/images/facebook.png" alt=""></a>facebook</li>
							<li><a href="https://twitter.com/#!/catalogopetc" target="_blank"><img src="resources/images/twitter.png" alt=""></a>twitter</li>
							<li></li>
					  </ul>
				  </section>
					<section class="col4 pad_left1">
						<h3>&nbsp;</h3>
</section>
				</div>
				<div id="footer_link">
			    CAT&Aacute;LOGO PETCETERA<br>
					Todos Los Derechos Reservados</div>
			</section>
		  <section class="col3 pad_left2">
			<h3>Contactanos</h3>
			</section>
		</div>
		<!-- {%FOOTER_LINK} -->
	</footer>
<!-- / footer -->
</div>

	
</body>
</html>