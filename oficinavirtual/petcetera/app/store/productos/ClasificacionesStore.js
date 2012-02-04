Ext.define('Iphoenix.store.productos.ClasificacionesStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.productos.Clasificaciones',
	    autoLoad: false,
	    StoreId:'ProductosClasificacionesStore',
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/productos/Clasificaciones.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
		        }
	    }
	
	});