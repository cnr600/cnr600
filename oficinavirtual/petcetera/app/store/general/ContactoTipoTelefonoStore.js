Ext.define('Iphoenix.store.general.ContactoTipoTelefonoStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.general.ContactoTipoTelefono',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/general/ContactoTipoTelefono.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});