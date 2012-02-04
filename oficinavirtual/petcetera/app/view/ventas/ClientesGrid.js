Ext.define('Iphoenix.view.ventas.ClientesGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.ClientesGrid',
	id:'ClientesGrid',
	initComponent:function(){
		Ext.apply(this,{
			
	        flex: 0.6,
	        store: 'ventas.ClientesStore',
	        dockedItems: [Ext.create('Ext.toolbar.Paging', {
		            dock: 'bottom',
		            displayInfo: true,
		            displayMsg: 'Clientes {0} - {1} de {2}',
		            emptyMsg: "No hay Clientes",
		            store: 'ventas.ClientesStore'
		        })],
	        columns: [{
	            
                text   : 'Titulo',
                flex: 0.5,
                sortable : true,
                dataIndex: 'titulo'
            },
	                  
	            {
	            
	                text   : 'Nombre',
	                flex: 1,
	                sortable : true,
	                dataIndex: 'nombre'
	            },
	            {
	                text   : 'Apellido Paterno',
	                flex:1,
	                sortable : true,
	                dataIndex: 'apaterno',
	                align: 'center'
	              
	            },
	            {
	                text   : 'Apellido Materno',
	                flex:1,
	                sortable : true,
	                align: 'center',
	                dataIndex: 'amaterno',
	               
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
	            	   				 "Estas seguro de eliminar al usuario "+rec.get('nombres')+" "+rec.get('apaterno')+"?",
	            	   				 function(btnText) {
	            	   				 if (btnText == "yes") {
	            	   					Ext.Ajax.request({
	            	   		        	    url: 'resources/data/ventas/Clientes.class.php?info=delete',
	            	   		        	    
	            	   		        	    params: {
	            	   		        	           id:rec.get('idvendedor')
	            	   		        	    },
	            	   		        	    success: function(response){
	            	   		        	    	Ext.getStore('ventas.ClientesStore').load();
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
	                    form =Ext.getCmp('ClientesPanel').getForm();
	                    fields = form.getFields();
	                    // prevent change events from firing
	                    fields.each(function(field){
	                        field.suspendEvents();
	                    });
	                    form.loadRecord(rec);
	                
	                    fields.each(function(field){
	                        field.resumeEvents();
	                    });
	                    var objStoreClasificacion=Ext.getStore('ventas.ClientesTelefonosStore');
	                    objStoreClasificacion.clearFilter();
	                	var id=Ext.getCmp("ClientesGrid").getSelectionModel().getSelection()[0].getId();
	               
	                    objStoreClasificacion.load();
                		objStoreClasificacion.filter( {property: "cliente", value: id});
                		objStoreClasificacion.load();
                		
                		
                		  var objStoreClasificacion2=Ext.getStore('ventas.ClientesEmailsStore');
  	                    objStoreClasificacion2.clearFilter();
  	                	var id2=Ext.getCmp("ClientesGrid").getSelectionModel().getSelection()[0].getId();
  	                    
                  		objStoreClasificacion2.filter( {property: "cliente", value: id2});
                  		objStoreClasificacion2.load();
                  		
	                    
	                }
	            }
	        }
		});
		this.callParent(arguments);
	}	,
	renderStatus:function(status) {
	    if(status) {
	      return '<img class="img-button" src="resources/images/icons/icon_status_green.gif" />';
	    }else {
	      return '<img class="img-button" src= "resources/images/icons/icon_status_red.gif" />';
	    }
	  }
})


	