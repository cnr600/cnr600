Ext.define('Iphoenix.store.empresas.EmpresasStore', {
	    extend: 'Ext.data.Store',
	    model: 'Iphoenix.model.empresas.Empresas',
	    storeId:'EmpresasStore',
	    autoLoad: true,
	    proxy: {
	        type: 'ajax',
	        url:'resources/data/empresas/EmpresasFacturacion.class.php?info=list',
	            reader: {
		            type: 'json',
		            root: 'DATA',
		            successProperty: 'success',
		            totalProperty :'TOTAL'
		        }
	    }
	
	});