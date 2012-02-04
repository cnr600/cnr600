Ext.define('Iphoenix.store.ventas.ClientesEmailsStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.ventas.ClientesEmails',
	    autoLoad: false,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/ventas/ClientesEmails.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});