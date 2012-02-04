Ext.define('Iphoenix.controller.Controller', {
	extend : 'Ext.app.Controller',
	models:[
	        'catalogo.Productos',
	        'pedidos.Productos',
	        'pedidos.ProductosNuevoPedido',
	        'pedidos.Pedidos',
	        'pedidos.PedidosFacturas',
	        'pedidos.PedidosEnvios',
	        'pedidos.PedidosProductos',
	        'pedidos.PedidosEstatus',
	        'ventas.Clientes',
	        'vendedor.Vendedor',
	        'productos.Productos',
	        'ventas.ClientesEmails',
	        'ventas.ClientesTelefonos',
	        'general.ContactoTipoTelefono',
		       'general.ContactoTipoEmail',
		       'general.ContactoTipoDireccion',
		       'empresas.Empresas',
		       'reportes.Report1',
		       'reportes.VentasPorProducto',
		       'reportes.VentasPorMes'
	        ],
	stores:[
	        'catalogo.ProductosStore',
	        'pedidos.ProductosStore',
	        'pedidos.PedidosStore',
	        'pedidos.PedidosEnviosStore',
	        'pedidos.PedidosFacturasStore',
	        'pedidos.PedidosProductosStore',
	        'pedidos.NuevoPedidoStore',
	        'pedidos.PedidosEstatusStore',
	        'ventas.ClientesStore',
	        'vendedor.VendedorStore',
	        'vendedor.VendedorEmailsStore',
	        'vendedor.VendedorTelefonosStore',
	        'productos.ProductosStore',
	        'ventas.ClientesEmailsStore',
	        'ventas.ClientesTelefonosStore',
	        'general.ContactoTipoTelefonoStore',
	        'general.ContactoTipoDireccionStore',
	        'general.ContactoTipoEmailStore',
	        'empresas.EmpresasStore',
	        'reportes.Report1Store',
	        'reportes.VentasPorProductoStore',
	        'reportes.VentasPorMesStore'
	        ],
	views:[
	       'core.Launch',
	       'core.menus.Top',
	       'core.About',
	       
	       'comunicacion.Comunicacion',
	       
	       'pedidos.Pedidos',
	       'pedidos.NuevoPedido',
	       'pedidos.PedidosForm',
	       'pedidos.PedidosPanel',
	       'pedidos.AgregaProductos',
	       'pedidos.Facturacion',
	       'pedidos.Envio',
	       
	       'ventas.Clientes',
	       'ventas.ClientesPanel',
	       'ventas.ClientesGrid',
	       'ventas.ClientesForm',
	       'ventas.ClientesTab',
	       
	       'empresas.Empresas',
	       'empresas.EmpresasForm',
	       'empresas.EmpresasGrid',
	       'empresas.EmpresasPanel',
	       
	       'general.TelefonosForm',
	       'general.EmailForm',
	       
	       'reportes.R1',
	       
	       'catalogo.Catalogo',
	       'catalogo.IconBrowser',
	       'catalogo.InfoPanel',
	       
	       'vendedor.VendedorInfo',
	       'reportes.ventas.ReporteVentasPorProducto',
	         'reportes.ventas.ReporteVentasPorMes',
	         'reportes.Report1',
	         'reportes.ventas.VentasTab'
	       
	       
	       ],
	init: function() {
	    this.control({
	    	

	    });
	
}

});