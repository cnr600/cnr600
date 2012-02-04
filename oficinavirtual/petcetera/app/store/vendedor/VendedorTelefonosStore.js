Ext.define('Iphoenix.store.vendedor.VendedorTelefonosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.ventas.ClientesTelefonos',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/vendedor/VendedorTelefonos.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});