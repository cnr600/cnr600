Ext.define('Iphoenix.store.pedidos.ProductosStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.pedidos.Productos',
	    autoLoad: true,
	    remoteFilter:false, 
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