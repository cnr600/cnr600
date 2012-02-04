Ext.define('Iphoenix.store.vendedor.VendedorEmailsStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.ventas.ClientesEmails',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/vendedor/VendedorEmails.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});