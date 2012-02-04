Ext.define('Iphoenix.store.pedidos.PedidosProductosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.PedidosProductos',
	    autoLoad: false,
	    pageSize:200,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/pedidos/PedidosProductos.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});