Ext.define('Iphoenix.store.pedidos.PedidosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.Pedidos',
	    autoLoad: true,
	   // remoteSort : true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/pedidos/Pedidos.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});