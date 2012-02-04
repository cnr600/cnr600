Ext.define('Iphoenix.store.general.ContactoTipoDireccionStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.general.ContactoTipoDireccion',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/general/ContactoTipoDireccion.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});