Ext.define('Iphoenix.store.reportes.VentasPorMesStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.reportes.VentasPorMes',
	    autoLoad: false,
	    remoteFilter:false,
	    pageSize:200,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/reportes/Reportes.class.php?info=ventaspormes',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
		        }
	    }
	
	});