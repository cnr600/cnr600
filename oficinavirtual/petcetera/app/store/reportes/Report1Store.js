Ext.define('Iphoenix.store.reportes.Report1Store', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.reportes.Report1',
	    autoLoad: true,
	    remoteFilter:false,
	    pageSize:200,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/reportes/Reportes.class.php?info=report1',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
		        }
	    }
	
	});