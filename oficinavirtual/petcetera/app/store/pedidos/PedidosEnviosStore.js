Ext.define('Iphoenix.store.pedidos.PedidosEnviosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.PedidosEnvios',
	    autoLoad: false,
	    groupField: 'direccion',
	    
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/pedidos/PedidosEnvios.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});