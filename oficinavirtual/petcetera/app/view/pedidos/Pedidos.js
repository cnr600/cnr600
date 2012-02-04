Ext.define('Iphoenix.view.pedidos.Pedidos',{
	extend:'Ext.panel.Panel',
	alias:'widget.Pedidos',
	id:'Pedidos',
    requires:[
              'Ext.grid.*',
              'Ext.data.*',
              'Ext.ux.grid.FiltersFeature',
              'Ext.toolbar.Paging'
          ],
initComponent:function(){
		
	    var gridPanel = Ext.create('Ext.grid.Panel', {
	    	id:'PedidosGrid',
	        flex: 0.6,
	        store: 'pedidos.PedidosStore',
	        dockedItems: [Ext.create('Ext.toolbar.Paging', {
		            dock: 'bottom',
		            displayInfo: true,
		            displayMsg: 'Pedidos {0} - {1} de {2}',
		            emptyMsg: "No hay pedidos",
		            store: 'pedidos.PedidosStore'
		        })],
		        features: [{
			        ftype: 'filters',
			        encode: true, 
			        local: false,  
			        filters: [
			            {
			                type: 'string',
			                dataIndex: 'idpedidos'
			            }
			        ]
			    }],
	        columns: [{
	            
                text   : 'Id Pedido',
                width:130,
                sortable : true,
                dataIndex: 'idpedidos',
                filterable:true	
            },
            {
        	    xtype: 'datecolumn',
                text   : 'Fecha',
                format: 'd-m-Y',
                width:90,
                align:'center',
                sortable : true,
                dataIndex: 'fecha',
                filterable: true
            },{
	            
	                text   : 'Tipo',
	                flex: 1,
	                sortable : true,
	                align: 'center',
	                dataIndex: 'cliente',
	                renderer:this.renderPedidoTipo
	            },
	            {
	                text   : 'Cantidad',
	                flex:1,
	                sortable : true,
	                dataIndex: 'cantidad',
	                align: 'center'
	              
	            }, {
	                text   : 'Total',
	                flex:1,
	                sortable : true,
	                dataIndex: 'total',
	                align: 'center',
	                filterable:true
	              
	            },
	            {
	                text   : 'Factura',
	                flex:1,
	                sortable : true,
	                align: 'center',
	                dataIndex: 'factura',
	                renderer:this.renderPedido
	               
	            },
	            {
	                text   : 'Envio',
	                flex:1,
	                sortable : true,
	                align: 'center',
	                dataIndex: 'envio',
	                filterable:true,
	                renderer:this.renderPedido
	               
	            },
	            {
	                text   : 'Estatus',
	                width:100,
	                sortable : true,
	                align: 'center',
	                dataIndex: 'estatus',
	                renderer:this.renderEstatus
	               
	            }
	        ],

	        listeners: {
	            selectionchange: function(model, records) {
	            	
	                var json, name, i, l, items, series, fields;
	                if (records[0]) {
	                    rec = records[0];
	                    form =Ext.getCmp('PedidosPanel').getForm();
	                    fields = form.getFields();
	                    // prevent change events from firing
	                    fields.each(function(field){
	                        field.suspendEvents();
	                    });
	                    form.loadRecord(rec);
	                
	                    fields.each(function(field){
	                        field.resumeEvents();
	                    });
	                    var estatus=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('estatusid');
	                    var factura=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('factura');
	                    var envio=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('envio');
	                    if(estatus!='pi'){
	                    	Ext.getCmp('cancelarpedido').disable();
	                    }else{
	                    	Ext.getCmp('cancelarpedido').enable();
	                    }
	                    if(!factura){
	                    	Ext.getCmp('facturaciontab').disable();
	                    }else{
	                    	Ext.getCmp('facturaciontab').enable();
	                    }
	                    if(!envio){
	                    	Ext.getCmp('enviostab').disable();
	                    }else{
	                    	Ext.getCmp('enviostab').enable();
	                    }
	                    //objStoreClasificacion.load();
	                    var objStoreClasificacion=Ext.getStore('pedidos.PedidosProductosStore');
	                    objStoreClasificacion.clearFilter();
	                    objStoreClasificacion.load();
	                	var id=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('idpedidos');
                		objStoreClasificacion.filter( {property: "pedido", value: id});
                		console.log(id);
                		//Estatus de los pedidos
                		 var objStoreEstatus=Ext.getStore('pedidos.PedidosEstatusStore');
 	                    objStoreEstatus.clearFilter();
 	                   objStoreEstatus.load();	                	
                 		objStoreEstatus.filter( {property: "pedido", value: id});
                 		
                 		//Envios de los pedidos
               		 var objStoreEnvio=Ext.getStore('pedidos.PedidosEnviosStore');
	                    objStoreEnvio.clearFilter();
	                   objStoreEnvio.load();	                	
                		objStoreEnvio.filter( {property: "pedido", value: id});
                		
                		//Factura de los pedidos
                  		 var objStoreFactura=Ext.getStore('pedidos.PedidosFacturasStore');
   	                    objStoreFactura.clearFilter();
   	                   objStoreFactura.load();	                	
                   		objStoreFactura.filter( {property: "pedido", value: id});
                 		
                 		var descpremiump=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('descpremiumpercent');
                 		var desclineap=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('desclineapercent');
                 		
                 		var descpremium=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('descpremium');
                 		var descpremiumotros=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('descpremiumotros');
                 		var desclinea=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('desclinea');
                 		var desclineaotros=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('desclineaotros');
                 		
                 		var descuento=descpremium+desclinea+descpremiumotros+desclineaotros;
                 		Ext.getCmp('lineadescuentostring2').setValue(desclineap*100+'%');
                 		Ext.getCmp('premiumdescuentostring2').setValue(descpremiump*100+'%');
                 		Ext.getCmp('descuentoped').setValue(descuento);
                 		
	                }
	            }
	        }
	    });

	

	  //  var gp = Ext.getCmp('company-form1');
	    Ext.apply(this,{
	    	title: 'Pedidos',
	    	iconCls: 'pedidos',
	    	closable:false,
	        frame: true,
	        bodyPadding: 5,
	      

	        fieldDefaults: {
	            labelAlign: 'left',
	            msgTarget: 'side'
	        },
	    
	        layout: {
	            type: 'vbox',
	            align: 'stretch'
	        },
	        
	        items: [
	         
	            {
	            
	            layout: {type: 'hbox', align: 'stretch'},
	            flex: 3,
	            border: false,
	            bodyStyle: 'background-color: transparent',
	            
	            items: [gridPanel, {
	                xtype:'PedidosPanel',
	               // store:objStoreClasificacion,
	            	tbar:[
	    			      '->', {
	    			         icon: 'resources/images/icons/delete.png',
	    			         text: 'Cancelar pedido',
	    			         id:'cancelarpedido',
	    			         disabled:false,
	    			         scope: this,
	    			         handler: this.onCancelarPedido
	    			     }
	    			     			      ]
	    			     			      
	            }]
	        }]
	    });
	    this.callParent(arguments);
	},
	 onAddClick: function(){
		 Ext.create('Ext.window.Window', {
			 id:'NuevoVendedor',
			    title: 'Agregar nuevo cliente',
			    height: 500,
			    width: 450,
			    layout: 'fit',
			    items: [{  
			        xtype: 'ClientesPanel',
			    	id:'2',
	 			     buttons: [{
	     			        text: 'Reset',
	     			        handler: function() {
	     			            this.up('form').getForm().reset();
	     			        }
	     			    }, {
	     			        text: 'Submit',
	     			        formBind: true, //only enabled once the form is valid
	     			        disabled: true,
	     			        handler: function() {
	     			            var form = this.up('form').getForm();
	     			            if (form.isValid()) {
	     			                form.submit({
	     			                	url: 'resources/data/ventas/Clientes.class.php?info=add',
	     			        			   success: function(form, action) {
	     			                       Ext.Msg.alert('Success', action.result.msg);
	     			                       var win=Ext.getCmp('NuevoVendedor');
	     			                       win.hide();
	     			                       win.destroy();
	     			                       Ext.getStore('ventas.ClientesStore').load();
	     			                    },
	     			                    failure: function(form, action) {
	     			                        Ext.Msg.alert('Failed', action.result.msg);
	     			                       var win=Ext.getCmp('NuevoVendedor');
	     			                       win.hide();
	     			                       win.destroy();
	     			                    }
	     			                });
	     			            }
	     			        }
	     			    }]
	
			    }]
			}).show();
		 
		  
	       
	    },
	    
	    onCancelarPedido: function(button){
	    
             	
                 var idpedido=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('idpedidos');
               
     	        	Ext.Msg.confirm(
     	   				 "Aviso",
     	   				 "Estas seguro de cancelar el pedido "+idpedido+"?",
     	   				 function(btnText) {
     	   				 if (btnText == "yes") {
     	   					Ext.Ajax.request({
     	   		        	    url: 'resources/data/pedidos/Pedidos.class.php?info=cancel',
     	   		        	    
     	   		        	    params: {
     	   		        	           id:idpedido
     	   		        	    },
     	   		        	    success: function(response){
     	   		        	    	Ext.getStore('pedidos.PedidosStore').load();
     	   		        	    var id=Ext.getCmp("PedidosGrid").getSelectionModel().getSelection()[0].get('idpedidos');
     	   		        	    var objStoreEstatus=Ext.getStore('pedidos.PedidosEstatusStore');
     	 	                    objStoreEstatus.clearFilter();
     	 	                   objStoreEstatus.load();	                	
     	                 		objStoreEstatus.filter( {property: "pedido", value: id});
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
     	        	
     	         
     	        
                
             
	    },
		renderPedido:function(status) {
		    if(status) {
		      return '<span style="color:green">S&iacute;</span>';
		    }else {
		    	  return '<span style="color:red">No</span>';
		    }
		  },
			renderPedidoTipo:function(status) {
			    if(status) {
			      return '<span style="color:green">Cliente</span>';
			    }else {
			    	  return '<span style="color:green">Propio</span>';
			    }
			  },
	
				renderEstatus:function(status) {
				    if(status=="Pedido cancelado") {
				      return '<span style="color:red">'+status+'</span>';
				    }else if(status=="Pedido completado") {
				    	return '<span style="color:green">'+status+'</span>';
				    }else{
				    	return '<span style="color:#999933">'+status+'</span>';
				    }
				  }		  
		  
});