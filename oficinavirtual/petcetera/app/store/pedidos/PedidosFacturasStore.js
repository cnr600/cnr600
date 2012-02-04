Ext.define('Iphoenix.store.pedidos.PedidosFacturasStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.PedidosFacturas',
	    autoLoad: false,
	    groupField: 'razonsocial',
	    
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/pedidos/PedidosFacturas.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});