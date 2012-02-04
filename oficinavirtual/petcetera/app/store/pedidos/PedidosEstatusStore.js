Ext.define('Iphoenix.store.pedidos.PedidosEstatusStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.PedidosEstatus',
	    autoLoad: false,
	    pageSize:200,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/pedidos/PedidosEstatus.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});