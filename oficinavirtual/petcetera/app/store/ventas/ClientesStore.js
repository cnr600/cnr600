Ext.define('Iphoenix.store.ventas.ClientesStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.ventas.Clientes',
	    storeId:'ClientesStore',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/ventas/Clientes.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});