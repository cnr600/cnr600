Ext.define('Iphoenix.store.ventas.ClientesTelefonosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.ventas.ClientesTelefonos',
	    autoLoad: false,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/ventas/ClientesTelefonos.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});