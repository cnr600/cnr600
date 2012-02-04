Ext.define('Iphoenix.store.productos.ProductosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.productos.Productos',
	    autoLoad: true,
	    pageSize:80,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/productos/Productos.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
		        }
	    }
	
	});