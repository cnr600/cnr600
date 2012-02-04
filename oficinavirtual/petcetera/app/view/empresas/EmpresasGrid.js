Ext.define('Iphoenix.view.empresas.EmpresasGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.EmpresasGrid',
	id:'EmpresasGrid',
	initComponent:function(){
		Ext.apply(this,{
			
	        flex: 0.6,
	        store: 'empresas.EmpresasStore',
	        dockedItems: [Ext.create('Ext.toolbar.Paging', {
		            dock: 'bottom',
		            displayInfo: true,
		            displayMsg: 'Empresas {0} - {1} de {2}',
		            emptyMsg: "No hay empresas registradas",
		            store: 'empresas.EmpresasStore'
		        })],
	        columns: [{
	            
                text   : 'Raz&oacute;n Social',
                flex: 3,
                sortable : true,
                dataIndex: 'razonsocial'
            },
	                  
	            {
	            
	                text   : 'RFC',
	                flex: 1,
	                sortable : true,
	                dataIndex: 'rfc'
	            },{
	                xtype:'actioncolumn',
	                align: 'center',
	                width:50,
	                items: [{
	                    icon: 'resources/images/icons/delete.png',  // Use a URL in the icon config
	                    tooltip: 'Eliminar',
	                    handler: function(grid, rowIndex, colIndex) {
	                    	
	                        var rec = grid.getStore().getAt(rowIndex);
	                      
	            	        	Ext.Msg.confirm(
	            	   				 "Aviso",
	            	   				 "Estas seguro de eliminar a la empresa "+rec.get('razonsocial')+"?",
	            	   				 function(btnText) {
	            	   				 if (btnText == "yes") {
	            	   					Ext.Ajax.request({
	            	   		        	    url: 'resources/data/empresas/EmpresasFacturacion.class.php?info=delete',
	            	   		        	    
	            	   		        	    params: {
	            	   		        	           id:rec.get('id')
	            	   		        	    },
	            	   		        	    success: function(response){
	            	   		        	    	Ext.getStore('empresas.EmpresasStore').load();
	            	   		        	        var text = response.responseText;
	            	   		        	        Ext.Msg.alert('Aviso', text);
	            	   		        	    },
	            	   		        	    failure: function(response){
	            	   		        	        var text = response.responseText;
	            	   		        	        Ext.Msg.alert('Aviso', text);
	            	   		        	    }
	            	   		        	});
	            	   				 }	
	            	   				 },
	            	   				 this
	            	   				 );
	            	        	
	            	         
	            	        
	                       
	                    }
	                }]
	            }
	        ],

	        listeners: {
	            selectionchange: function(model, records) {
	                var json, name, i, l, items, series, fields;
	                if (records[0]) {
	                    rec = records[0];
	                    form =Ext.getCmp('EmpresasPanel').getForm();
	                    fields = form.getFields();
	                    // prevent change events from firing
	                    fields.each(function(field){
	                        field.suspendEvents();
	                    });
	                    form.loadRecord(rec);
	                
	                    fields.each(function(field){
	                        field.resumeEvents();
	                    });
	                 
	                    
	                }
	            }
	        }
		});
		this.callParent(arguments);
	}	
})


	