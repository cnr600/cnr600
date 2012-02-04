Ext.define('Iphoenix.view.pedidos.NuevoPedido',{
	extend:'Ext.form.Panel',
	alias:'widget.NuevoPedido',

	initComponent:function(){
		
	   
		 var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
 	        clicksToEdit: 1
 	    });
		var objStore =Ext.getStore("pedidos.NuevoPedidoStore");
		var objStore2 =Ext.getStore("productos.ProductosStore");
		function onMailingAddrFieldChange(field) {
	        var copyToBilling = Ext.getCmp('pruebadecobro').getValue();
	        if (copyToBilling) {
	            formPanel.down('[name=' + field.billingFieldName + ']').setValue(field.getValue());
	        }
	    };
		Ext.apply(this,{
			id:'nuevopedido',
			autoScroll:true,
            bbar:[
			      '->', {
			         text: 'Completar pedido',
			         scope: this,
			         disabled:false,
			         handler: this.onGuardarPedidoClick
			     }
			     			      ],
			flex: 0.4,
			height:440,
		        border: false,
		        bodyBorder: false,
		        fieldDefaults: {
		            labelWidth: 75,
		            msgTarget: 'side'
		        },
		        defaults: {
		            anchor: '100%'
		        },

		        items: {
		            xtype:'panel',
		            activeTab: 0,
		            
		            defaults:{
		                bodyStyle:'padding:10px'
		            },

		            items:[{
		                //title:' Informacion del pedido',
		                defaultType: 'textfield',
		  
		                items: [  {
		                    xtype: 'fieldset',
		                    title: 'Informaci&oacute;n del vendedor',
		                    defaultType: 'textfield',
		                    layout: 'anchor',
		                    defaults: {
		                        anchor: '100%'
		                    },
		                    items: [{ xtype: 'checkbox',
		                 
		                        name: 'ss',
		                        boxLabel: '&iquest;El pedido es para un cliente?',
		                        name:'cliente',
		                        hideLabel: false,
		                        checked:false,
		                        handler:function(me,checked){
		                        	if(checked){
		                        		Ext.getCmp('combonuevopedidocliente').enable();
		                        	}else{
		                        		Ext.getCmp('combonuevopedidocliente').disable();
		                        	}
		                        }
		                        
		                    },{
		                        	xtype:'combo',
		                        	id:'combonuevopedidocliente',
		                        	name:'idcliente',
		                            disabled:true, 
		                        	fieldLabel: 'Selecciona un cliente',
		                            store: 'ventas.ClientesStore',
		                            queryMode: 'local',
		                            displayField: 'nombre1',
		                            valueField: 'id'
		                        }]
		                }, {
		                    xtype: 'container',
		                    layout: 'hbox',
		                    margin: '0 0 10',
		                    items: [{
			                    xtype: 'Facturacion'
			                   
			                }, {
		                        xtype: 'component',
		                        width: 30
		                    }, {
			                    xtype: 'Envio'
			                   
			                }]
		                },{
		                	xtype:'fieldset',
		                	title:'Selecciona un producto',
		                	
		                	items:[{ xtype: 'checkbox',
		                		id:'lineapremiumcheck',	
		                		disabled:false,
		                        columnWidth: 0.5,
		                        name: 'lineapremium',
		                        boxLabel: 'Productos Premium',
		                        hideLabel: true,
		                        checked:false},{
		                		xtype:'grid',
		                		height: 300,
		                		autoScroll:true,
		                		id:'premium',
		                		store:objStore,
		                		tbar:[{
		                			icon: 'resources/images/icons/add.png',
			    			         text: 'Tabla de descuentos',
			    			         handler:function(){
			    			        	 Ext.create('Ext.window.Window', {
			    			        		    title: 'Tabla de descuentos',
			    			        		    height: 528,
			    			        		    width: 528,
			    			        		    layout: 'fit',
			    			        		    html:'<iframe src="resources/html/descuentos.html" width="100%" height="100%" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
			    			        		}).show();
			    			         }
		                		},
				    			      '->', {
				    			         icon: 'resources/images/icons/add.png',
				    			         text: 'Agregar productos',
				    			         scope: this,
				    			         handler: function(){
				    			        	 var premium=Ext.getCmp('lineapremiumcheck');
				    			        	
				    			        	 if(premium.getValue()){
				    			        		
				    			        		 objStore2.clearFilter();
				    			        		 objStore2.filter( {property: "premium", value: 1});
				    			        	 }else{
				    			        		 objStore2.clearFilter();
				    			        		 objStore2.filter( {property: "premium", value:0});
				    			        	 }
				    			        	 var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
				    			        	        clicksToEdit: 1
				    			        	    });
				    			        	 Ext.create('Ext.window.Window', {
				    			        		    title: 'Agregar productos al pedido',
				    			        		    id:'agregarpedido',
				    			        		    height: 400,
				    			        		    width: 600,
				    			        		    layout: 'fit',
				    			        		    items: [{
				    			        		    	xtype:'AgregaProductos'
				    			        		    }]
				    			        		}).show();
				    			         }
				    			     }
				    			     			      ],
				    			     			     editor: {
				    			        	                allowBlank: false
				    			        	            },
				    			  
				    			        		        selModel: {
				    			        		            selType: 'cellmodel'
				    			        		        },
				    			        		        plugins: [cellEditing], 
				    			
				    			autoScroll:true,
		                		columns: [{
              		              header: 'id',
            		              dataIndex: 'codigointerno',
            		              sortable: false,
            		              hidden: true,
            		              flex: 1
            		              
            		          },{
            		              header: 'Peso',
            		              dataIndex: 'peso',
            		              sortable: false,
            		              hidden: true,
            		              flex: 1
            		          },
		                		          {
		                		              header: 'Producto',
		                		              dataIndex: 'producto',
		                		              sortable: false,
		                		              hideable: false,
		                		              flex: 2
		                		          },
		                		          {
		                		              header: 'Cantidad',
		                		              dataIndex: 'cantidad',
		                		              flex: 1/*, 
		                		              editor: {
		                		                  xtype: 'numberfield',
		                		                  allowBlank: false,
		                		                  minValue: 0,
		                		                  maxValue: 1000,
		                		                  value:0
		                		              }*/
		                		          },
		                		          {
		                		              header: 'Precio',
		                		              dataIndex: 'precio',
		                		              decimalSeparator :'.',
					    		              thousandSeparator :',',
					    		              renderer: function(value){
					    		            	  return '$ '+value;
					    		              },
		                		              flex: 1
		                		          },
		                		          {
		                		              header: 'Total',
		                		              dataIndex: 'total',
		                		              decimalSeparator :'.',
					    		              thousandSeparator :',',
					    		              renderer: function(value){
					    		            	  return '$ '+value;
					    		              },
		                		              flex: 1
		                		          },{
		                		              xtype:'actioncolumn',
		                		              width:50,
		                		              items: [{
		                		                  icon: 'resources/images/icons/refresh.png',  // Use a URL in the icon config
		                		                  tooltip: 'actualizar',
		                		                  handler: function(grid, rowIndex, colIndex) {
		                		                      var rec = grid.getStore().getAt(rowIndex);
		                		                      alert("Actualiza " + rec.get('cantidad')+" ="+ rec.get('producto'));
		                		                  }
		                		              },{
		                		                  icon: 'resources/images/icons/delete.png',
		                		                  tooltip: 'borrar',
		                		                  handler: function(grid, rowIndex, colIndex) {
		                		                      var rec = grid.getStore().getAt(rowIndex);
		                		                      var cantidad=rec.get('cantidad');
		                		                      var precio=rec.get('precio');
		                		                      var peso=rec.get('peso');
		                		                      var total=cantidad*precio;
		                		                      
		                		                      var subtotalCmp=Ext.getCmp('npsubtotal');
		                		                     
		                		                      var subtotal=subtotalCmp.getValue()-total;
		                		                      subtotalCmp.setValue(subtotal);
		                		                      var totalCmp=Ext.getCmp('nptotal');
		                		                    //  totalCmp.setValue(totalCmp.getValue()-total);
		                		                      var cantidadCmp=Ext.getCmp('npcantidad');
		                		                      cantidadCmp.setValue(cantidadCmp.getValue()-cantidad);
		                		                      
		                		                      var pesoCmp=Ext.getCmp('nppeso');
		                		                      pesoCmp.setValue(pesoCmp.getValue()-peso);
		                		                      var desc=Ext.getCmp('npdescuento');
		                		                      
		                		                      var premium=Ext.getCmp('lineapremiumcheck');
			                		                  
			                		                     
			                		                   if(premium.checked){
			                		                	   if(subtotal<=9000){
   			                		                    	 
	    			                		                    
	    			                		                     
		    			                		                 
	    			                		                    var descacum=subtotal*0.02;
	    			                		                    desc.setValue(descacum);
	    			                		                    Ext.getCmp('npdescuentopercent').setValue(2);
			                		                    
			                		                    	 
			                		                    	
			                		                     }else if(subtotal>=9001){
			                		                    	 var descacum=desc.getValue()+(subtotal*0.05);
	    			                		                    desc.setValue(descacum);
	    			                		                    Ext.getCmp('npdescuentopercent').setValue(5);
			                		             
			                		                     }}
		                		                      else{
		                		                    	  if(subtotal>=1500&&subtotal<=3000){
				                		                    	 
		  			                		                    
		 			                		                     
		    			                		                 
		  			                		                    var descacum=subtotal*0.03;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(3);
				                		                    
				                		                    	 
				                		                    	
				                		                     }else if(subtotal>=3001&&subtotal<=6000){
				                		                    	 var descacum=subtotal*0.05;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(5);
				                		             
				                		                     }else if(subtotal>=6001&&subtotal<=12000){
				                		                    	 var descacum=subtotal*0.07;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(7);
				                		                   
				                		                     }else if(subtotal>=12001&&subtotal<=20000){
				                		                    	 var descacum=subtotal*0.1;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(10);
				                		             
				                		                     }else if(subtotal>=20001&&subtotal<=35000){
				                		                    	 var descacum=subtotal*0.12;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(12);
				                		              
				                		                     }else if(subtotal>=35001&&subtotal<=50000){
				                		                    	 var descacum=dsubtotal*0.13;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(13);
				                		                    	
				                		                     }else if(subtotal>50000){
				                		                    	 var descacum=subtotal*0.15;
		  			                		                    desc.setValue(descacum);
		  			                		                    Ext.getCmp('npdescuentopercent').setValue(15);
				                		                
				                		                     }else{
				                		                    	 Ext.getCmp('npdescuentopercent').setValue(0);
				                		                    	 Ext.getCmp('npdescuento').setValue(0);
				                		                    	
				                		                     }
		                		                      }
		                		                      var totalCmp=Ext.getCmp('nptotal');
		                		                      var total11=subtotal+Ext.getCmp("npenvio").getValue()-desc.getValue();
			                		                     totalCmp.setValue(total11); 
		                		                      var str=Ext.getStore('pedidos.NuevoPedidoStore');
		                		                     str.remove(rec);
		                		                      // alert("Terminate " + rec.get('firstname'));
		                		                  }
		                		              }]
		                		          }
		                		      ]
		                	}]
		                },{
		                	xtype: 'container',
		                    layout: 'hbox',
		                    
		                    margin: '0 0 10',
		                    items: [{
		                        xtype: 'fieldset',
		                        flex: 1,
		                        title: 'Productos premium (descuento inicial 17%)',
		                        defaultType: 'numberfield', // each item will be a checkbox
		                        layout: 'anchor',
		                        defaults: {
		                            anchor: '100%',
		                            hideEmptyLabel: false
		                        },
		                        items: [{
				                    fieldLabel: 'Cantidad',
				                    id:'premiumcantidad',
				                    name:'premiumcantidad',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                },{
				                    fieldLabel: 'Subtotal ($)',
				                    id:'premiumsubtotal',
				                    decimalSeparator :'.',
			    		              thousandSeparator :',',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                },{
				                	xtype: 'displayfield',
				                	labelWidth :170,
				                	id:'premiumdescuentostring',
				                	fieldLabel: 'Porcentaje de descuento alcanzado',
				                	   decimalSeparator :'.',
				    		              thousandSeparator :',',
				                	value:'0%'
				                	},{
				                    xtype: 'hiddenfield',
				                    id:'premiumdescperc',
				                    name:'premiumdescperc',
				                    value:0
				                },{
				                    xtype: 'hiddenfield',
				                    id:'premiumdescped',
				                    name:'premiumdescped',
				                    value:0
				                },{
				                    xtype: 'hiddenfield',
				                    id:'premiumdescotros',
				                    name:'premiumdescotros',
				                    value:0
				                },{
				                    fieldLabel: 'Descuento acumulado ($)',
				                    id:'premiumdescacum',
				                    decimalSeparator :'.',
			    		              thousandSeparator :',',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                },{
				                    fieldLabel: 'Subtotal con descuento($)',
				                    id:'premiumsubtotaldesc',
				                    decimalSeparator :'.',
			    		              thousandSeparator :',',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                }]
		                    }, {
		                        xtype: 'component',
		                        width: 10
		                    }, {
		                        xtype: 'fieldset',
		                        flex: 1,
		                        title: 'Productos de l&iacute;nea (descuento inicial 28%) ',
		                        defaultType: 'numberfield', // each item will be a radio button
		                        layout: 'anchor',
		                        defaults: {
		                            anchor: '100%',
		                            hideEmptyLabel: false
		                        },
		                        items: [{
				                    fieldLabel: 'Cantidad',
				                    id:'lineacantidad',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                },{
				                    fieldLabel: 'Subtotal ($)',
				                    id:'lineasubtotal',
				                    decimalSeparator :'.',
			    		              thousandSeparator :',',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                },{
				                	xtype: 'displayfield',
				                	labelWidth :170,
				                	id:'lineadescuentostring',
				                	fieldLabel: 'Porcentaje de descuento alcanzado',
				                	value:'0%'
				                	},{
				                    xtype: 'hiddenfield',
				                    id:'lineadescperc',
				                    name:'lineadescperc',
				                    value:0
				                },{
				                    xtype: 'hiddenfield',
				                    id:'lineadescped',
				                    name:'lineadescped',
				                    value:0
				                },{
				                    xtype: 'hiddenfield',
				                    id:'lineadescotros',
				                    name:'lineadescotros',
				                    value:0
				                },{
				                    fieldLabel: 'Descuento acumulado ($)',
				                    id:'lineadescacum',
				                    decimalSeparator :'.',
			    		              thousandSeparator :',',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                },{
				                    fieldLabel: 'Subtotal con descuento($)',
				                    id:'lineasubtotaldesc',
				                    decimalSeparator :'.',
			    		              thousandSeparator :',',
				                    labelWidth :170,
				                    readOnly:true,
				                    value:0
				      			                
				                }]
		                    }]
		                	
		                },{
		                	xtype:'fieldset',
		                	title:'Totales del pedido',
		                	height:225,
		                	 defaultType: 'numberfield',
		                     defaults: {anchor: '40%'},
		                     layout: 'anchor',
		                	items:[{
		                	id:'npcantidad',	
		                    fieldLabel: 'Cantidad de productos',
		                    readOnly:true,

		                    labelWidth :170,
		                    name: 'cantidad',
		                    value:0
		                },{
		                    fieldLabel: 'Subtotal ($)',
		                    id:'npsubtotal',
		                    name:'subtotal',
		                    decimalSeparator :'.',
	    		              thousandSeparator :',',
		                    labelWidth :170,
		                    readOnly:true,
		                    value:0
		      
		                
		                },{
		                    fieldLabel: 'Peso (Kg)',
		                    id:'nppeso',
		                    name:'peso',
		                    decimalSeparator :'.',
	    		              thousandSeparator :',',
		                    labelWidth :170,
		                    readOnly:true,
		                  
		                    value:0.00
		                },{
		                    xtype: 'hiddenfield',
		                    id:'npguias',
		                    name: 'guias'
		                },{
		                    xtype: 'hiddenfield',
		                    id:'npenviotemp'
		                },{
		                    xtype: 'hiddenfield',
		                    id:'totaldescuentodelmespremium',
		                    value:0
		                },{
		                    xtype: 'hiddenfield',
		                    id:'totalcomprasdelmespremium',
		                    value:0
		                },{
		                    xtype: 'hiddenfield',
		                    id:'totaldescuentodelmeslinea',
		                    value:0
		                },{
		                    xtype: 'hiddenfield',
		                    id:'totalcomprasdelmeslinea',
		                    value:0
		                },{
		                    xtype: 'hiddenfield',
		                    name:'tipopedido',
		                    value:'ov'
		                },{
		                    fieldLabel: 'Envio ($)',
		                    id:'npenvio',
		                    readOnly:true,
		                    labelWidth :170,
		                    name: 'costoenvio',
		                    value:0.00
		                },{
		                    fieldLabel: 'Total ($)',
		                    id:'nptotal',
		                    decimalSeparator :'.',
	    		              thousandSeparator :',',
		                    readOnly:true,
		                    name: 'total',
		                    labelWidth :170,
		                    align:'center',
		                    value:0
		                }]
		                },{
		                	xtype:'fieldset',
		                	title:'Metodo de pago',
		                	items:[{
                    xtype: 'radiogroup',
                    allowBlank: false,
                    id:'npmetodopago',
                    layout: 'hbox',
                    defaults: {
                        name: 'tipodepago',
                        margins: '0 15 0 0'
                    },
                    items: [{
                        inputValue: 'transferencia',
                        id:'transferencia',
                        boxLabel: 'Transferencia bancaria'
                    }, {
                        inputValue: 'transferencia',
                        id:'deposito',	
                        boxLabel: 'Deposito bancario'
                    }, {
                        inputValue: 'tarjeta',
                        id:'tarjeta',
                        boxLabel: 'Tarjeta de credito'
                    }]
                }]
		                }]
		                
		            }]
		        }
		});
		this.callParent(arguments);
	}, onAddClick: function(){
		 Ext.create('Ext.window.Window', {
			 id:'NuevoVendedor',
			    title: 'Agregar nuevo vendedor',
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
		 
		  
	       
	    }, onGuardarPedidoClick: function(button){
	    	 var form= button.up('form');
	    	 var count=Ext.getStore("pedidos.NuevoPedidoStore").count();
	    	 
	         var loginForm=form.getForm();
	         if (loginForm.isValid()&&count>0) {
	        	 var count=Ext.getStore("pedidos.NuevoPedidoStore").count();
					var cantidad;
					var idproductos;
					var precio;
					var peso;
					for(var i=0;i<count;i++){
						if (i==0){ 
							cantidad=Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("cantidad");
	    					precio=Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("precio");
	    					idproductos=Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("codigointerno");
	    					pesoproductos=Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("peso");
						}	        					
						else{
							cantidad=cantidad+"-"+Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("cantidad");
	    					precio=precio+"-"+Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("precio");
	    					idproductos=idproductos+"-"+Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("codigointerno");
	    					pesoproductos=pesoproductos+"-"+Ext.getStore("pedidos.NuevoPedidoStore").getAt(i).get("peso");
						}
					}
	        		loginForm.submit({
	        			url: 'resources/data/pedidos/Pedidos.class.php?info=add',
	        			 params: {
                 	    	countproductos:count,
                 	        idproductos: idproductos,
                 	        cantidadproductos:cantidad,
                 	        precioproductos:precio,
                 	        pesoproductos:pesoproductos
                 	      
                 	     
                 	    },
	        			success: function(f,a){
	        				 Ext.example.msg("Aviso", 'Su pedido ha sido registrado correctamente');
	        				  	var transferencia=Ext.getCmp('transferencia').getValue();
	        				  	var deposito=Ext.getCmp('deposito').getValue();
	        				  	var tarjeta=Ext.getCmp('tarjeta').getValue();
	        				  	var total=Ext.getCmp('nptotal').getValue();
		                		
   		           	    	 if(transferencia){
   		           	    		var win=Ext.create('Ext.window.Window', {
   		           	    		    title: 'Ficha de dep&oacute;sito',
   		           	    		    height: 320,
   		           	    		    width: 780,
   		           	    		    layout: 'fit',
   		           	    		 html:'<iframe src="resources/html/ficha2.php?total='+total+'" width="100%" height="100%" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
   		           	    		}).show();
   		           	    	 }else if(deposito){
    		           	    		var win=Ext.create('Ext.window.Window', {
       		           	    		    title: 'Ficha de dep&oacute;sito',
       		           	    		    height: 320,
       		           	    		    width: 780,
       		           	    		    layout: 'fit',
       		           	    		 html:'<iframe src="resources/html/ficha2.php?total='+total+'" width="100%" height="100%" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
       		           	    		}).show();
       		           	    	 }else if(tarjeta){
        		           	    		var win=Ext.create('Ext.window.Window', {
           		           	    		    title: 'Ficha de dep&oacute;sito',
           		           	    		    height: 230,
           		           	    		    width: 800,
           		           	    		    layout: 'fit',
           		           	    		    html:'<img src="resources/images/pagos/pagos-TC-banner.png" width="770" height="210" />'
           		           	    		}).show();
           		           	    	 }
   		           	    	 
		        		
	        				 Ext.getStore('pedidos.PedidosStore').load();
	        				 var premium=Ext.getCmp("premium");
	        				
	        				 Ext.getCmp('nuevopedido').destroy();
	        				 Ext.getCmp('nuevopedidowindow').destroy();
	        				 Ext.getStore("pedidos.NuevoPedidoStore").removeAll();
	        				   
	        				
	        			},
	        			failure: function(form,action){
	        				
	        				if(action.failureType == 'server'){ 
	                            obj = Ext.JSON.decode(action.response.responseText); 
	                            Ext.Msg.alert('Atenci&oacuten!', 'np'); 
	                        }else{ 
	                            Ext.Msg.alert('Atenci&oacuten!', 'No es posible contactar al servidor de autenticaci&oacuten : ' + action.response.responseText); 
	                        }
	        			}
	        		});
			    	
				}else{
					Ext.Msg.alert('Atenci&oacuten', 'Favor de llenar todos los campos.');
				}
	    }
});