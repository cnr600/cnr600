Ext.define('Iphoenix.store.reportes.VentasPorProductoStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.reportes.VentasPorProducto',
	    autoLoad: true,
	    remoteFilter:false,
	    pageSize:200,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/reportes/Reportes.class.php?info=ventasporproducto',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
		        }
	    }
	
	});