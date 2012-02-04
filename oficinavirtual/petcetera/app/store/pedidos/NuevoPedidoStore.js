Ext.define('Iphoenix.store.pedidos.NuevoPedidoStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.ProductosNuevoPedido',
	    autoLoad: true,
	    idStore:'NuevoPedidoStore',
	    proxy: {
	    	type: 'rest',
	       
	        api: {
	            read: 'resources/data/empty.json',
	            update: 'resources/data/pedidos/PedidosArticulos.php?aquuiiii',
	            create: 'resources/data/pedidos/PedidosArticulos.php?create'
	        },    
	        reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
	       	
		        }
	    }
	
	});