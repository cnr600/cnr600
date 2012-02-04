Ext.define('Iphoenix.store.general.ContactoTipoEmailStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.general.ContactoTipoEmail',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/general/ContactoTiposEmail.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});