Ext.define('Iphoenix.store.catalogo.ProductosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.catalogo.Productos',
	    autoLoad: true,
	    pageSize:100,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/catalogo/Productos.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
	       	
		        }
	    }
	
	});