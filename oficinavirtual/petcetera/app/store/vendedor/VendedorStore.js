Ext.define('Iphoenix.store.vendedor.VendedorStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.vendedor.Vendedor',
	    storeId:'ClientesStore',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/vendedor/Vendedor.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});