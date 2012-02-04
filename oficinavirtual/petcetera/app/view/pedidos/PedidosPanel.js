Ext.define('Iphoenix.view.pedidos.PedidosPanel',{
	extend:'Ext.form.Panel',
	alias:'widget.PedidosPanel',
	id:'PedidosPanel',
	 requires:[
	              'Ext.grid.*',
	              'Ext.data.*',
	              'Ext.ux.RowExpander',
	              'Ext.selection.CheckboxModel'
	          ],
	initComponent:function(){
		Ext.apply(this,{
			
			flex: 0.4,
		        border: false,
		        bodyBorder: false,
		        fieldDefaults: {
		            labelWidth: 150,
		            msgTarget: 'side'
		        },
		        defaults: {
		            anchor: '100%'
		        },

		        items: {
		            xtype:'tabpanel',
		            activeTab: 0,
		            defaults:{
		                bodyStyle:'padding:10px'
		            },

		            items:[{
		                title:'Datos generales',
		                defaultType: 'textfield',

		                items: [{
		                    fieldLabel: 'Id Pedido',
		                    id:'idpedidos1',
		                    name: 'idpedidos',
		                    readOnly:true
		                },{
		                    fieldLabel: 'Estatus',
		                    name: 'estatus',
		                    readOnly:true
		                },{
		                    xtype: 'datefield',
		                    anchor: '100%',
		                    fieldLabel: 'Fecha',
		                    name: 'fecha',
		                    readOnly:true
		                },{
		                    xtype: 'radiogroup',
		                    fieldLabel: 'Pedido para un cliente',
		                    width:250,
		                    readOnly:true,
		                    columns: 2,
		                    items: [
		                        {boxLabel: 'S&iacute;', name: 'cliente1', inputValue: '1',
				                    readOnly:true},
		                        {boxLabel: 'No', name: 'cliente1', inputValue: '0',
				                    readOnly:true}
		                    ]
		                },{
		                    fieldLabel: 'Id cliente',
		                    name: 'idcliente',
		                    readOnly:true
		                },{
		                    xtype: 'radiogroup',
		                    fieldLabel: 'Requiere factura',
		                    width:250,
		                    columns: 2,
		                    items: [
		                        {boxLabel: 'S&iacute;', name: 'factura1', inputValue: '1',
				                    readOnly:true},
		                        {boxLabel: 'No', name: 'factura1', inputValue: '0',
				                    readOnly:true}
		                    ],
		                    readOnly:true
		                },{
		                    xtype: 'radiogroup',
		          
		                    fieldLabel: 'Requiere envio',
		                    width:250,
		                    columns: 2,
		                    items: [
		                        {boxLabel: 'S&iacute;', name: 'envio1', inputValue: '1',
				                    readOnly:true},
		                        {boxLabel: 'No', name: 'envio1', inputValue: '0',
					                    readOnly:true}
		                    ]
		                },{
		                	xtype: 'container',
		                    layout: 'hbox',
		                    margin: '0 0 10',
		                    items: [{
			                	xtype:'fieldset',
			                	title:'Totales del pedido',
			                	  flex: 1,
			                	height:250,
			                	 defaultType: 'textfield',
			                	 fieldDefaults: {
			     		            labelWidth: 150,
			     		            msgTarget: 'side'
			     		        },
			     		        defaults: {
			     		            anchor: '100%'
			     		        },
			                	items:[{
			                    fieldLabel: 'Cantidad de productos',
			                    width:20,
			                    name: 'cantidad',
			                    readOnly:true
			                },{
			                    fieldLabel: 'Subtotal',
			                    name: 'subtotal',
			                    readOnly:true
			                },{
			                    fieldLabel: 'Envio',
			                    name: 'costoenvio',
			                    readOnly:true
			                },{
			                	xtype: 'displayfield',
			                	labelWidth :170,
			                	id:'premiumdescuentostring2',
			                	fieldLabel: 'Descuento Premium (%)',
			                	value:'0%'
			                	},{
				                	xtype: 'displayfield',
				                	labelWidth :170,
				                	id:'lineadescuentostring2',
				                	fieldLabel: 'Descuento l&iacute;nea (%)',
				                	value:'0%'
				                	},{
			                    fieldLabel: 'Descuento',
			                    id:'descuentoped',
			                    name: 'descuento',
			                    readOnly:true
			                },{
			                    fieldLabel: 'Total',
			                    id:'totalpedido1',
			                    name: 'total',
			                    align:'center',
			                    readOnly:true
			                },{
			                	xtype:'button',
			                	text:'Ficha de deposito',
			                	handler:function(){
			                		var total=Ext.getCmp('totalpedido1').getValue();
			                		var pedido=Ext.getCmp('idpedidos1').getValue();
			                		Ext.create('Ext.window.Window', {
			                		    title: 'Ficha de deposito',
			                		    height: 400,
			                		    width: 800,
			                		    layout: 'fit',
			                		    html:'<iframe src="resources/html/ficha.php?pedido='+pedido+'&total='+total+'" width="100%" height="100%" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
			                		}).show();
			                	}
			                }]
			                }, {
		                        xtype: 'component',
		                        width: 10
		                    }, {
		                        xtype: 'fieldset',
		                        flex: 1,
		                        title: 'Historial de estatus ',
		                        height:250,
		                        defaultType: 'numberfield', // each item will be a radio button
		                        layout: 'anchor',
		                        defaults: {
		                            anchor: '100%',
		                            hideEmptyLabel: false
		                        },
		                        items: [{
		                        	xtype:'grid',
		                        	store:'pedidos.PedidosEstatusStore',
		                        
				        		        
		                        	columns: [
		                        	          {
        	    xtype: 'datecolumn',
                text   : 'Fecha',
                format: 'd-m-Y',
                width:90,
                align:'center',
                sortable : true,
                dataIndex: 'created'
            },
		                        	          { 
            	header: 'Estatus', 
            	dataIndex: 'estatusnombre',
            	align:'center', 
            	flex: 2 }
		                        	      ]
		                        }]
		                    }]
		                	
		                }]
		            },{
		                title:'Datos de facturaci&oacute;n',
		                id:'facturaciontab',
			                items: [ {
			                    xtype:'grid',
			                    store:'pedidos.PedidosFacturasStore',
			                    dockedItems: [Ext.create('Ext.toolbar.Paging', {
				 		            dock: 'bottom',
				 		            displayInfo: true,
				 		            displayMsg: 'Factura {0} - {1} de {2}',
				 		            emptyMsg: "No hay facturas",
				 		           store:'pedidos.PedidosFacturasStore',
				 		        })],
				 		       plugins: [{
				 		            ptype: 'rowexpander',
				 		            rowBodyTpl : [
				 		                '<p><b>Detalles:</b> {direccion}</p><br>'
				 		            ]
				 		        }],
				 		       features: [{
				 			    	id: 'group',
				 		            ftype: 'groupingsummary',
				 		            groupHeaderTpl: '{name}',
				 		            hideGroupedHeader: true,
				 		           // remoteRoot: 'summaryData',
				 		            startCollapsed : false
				 		                 	
				 		          
				 		        }],
			                    columns: [
			                        { header: 'Razon social',  dataIndex: 'razonsocial' },
			                        { header: 'RFC', dataIndex: 'rfc', flex: 1 },
			                        { header: 'Factura', dataIndex: 'archivo' },
			                        { header: 'Estatus', dataIndex: 'estatusnombre' }
			                    ]
			                }]
		            },{
		            	title:'Envios',
		            	id:'enviostab',
		            	xtype:'grid',
		            	height:300,
		            	autoScroll:true,
		            	store:'pedidos.PedidosEnviosStore',
		            	 dockedItems: [Ext.create('Ext.toolbar.Paging', {
		 		            dock: 'bottom',
		 		            displayInfo: true,
		 		            displayMsg: 'Envios {0} - {1} de {2}',
		 		            emptyMsg: "No hay envios",
		 		           store:'pedidos.PedidosEnviosStore',
		 		        })],
		 		     
		 		       features: [{
		 			    	id: 'group',
		 		            ftype: 'groupingsummary',
		 		            groupHeaderTpl: '{name}',
		 		            hideGroupedHeader: true,
		 		           // remoteRoot: 'summaryData',
		 		            startCollapsed : false
		 		                 	
		 		          
		 		        }],
		            	columns: [
		            	          { header: 'id',  dataIndex: 'pedido',flex:1,hidden:true },
		            	          { header: 'direccion',  dataIndex: 'direccion',flex:2 },
		            	          { header: 'guia', dataIndex: 'guia', flex: 1,
		            	        	  summaryType: 'count',
		     			             summaryRenderer: function(value, summaryData, dataIndex) {
		     			                 return value + ' guias';
		     			             }  
		            	          }, 

		            	          { header: 'Estatus',  dataIndex: 'estatusnombre',flex:2 },
		            	          { header: 'Notas',  dataIndex: 'notas',flex:2 }
		            	      ]
		            },{
		            	title:'Detalle de productos',
		            	xtype:'grid',
		            	store:'pedidos.PedidosProductosStore',
		            	 dockedItems: [Ext.create('Ext.toolbar.Paging', {
		 		            dock: 'bottom',
		 		            displayInfo: true,
		 		            displayMsg: 'Productos {0} - {1} de {2}',
		 		            emptyMsg: "No hay productos",
		 		           store:'pedidos.PedidosProductosStore',
		 		        })],
		            	columns: [
		            	          { header: 'id',  dataIndex: 'pedido',flex:1,hidden:true },
		            	          {
		            	        	  header: 'Imagen',
		            	              dataIndex: 'imagenurl',
		            	        	  weight:40,
		            	        	  renderer:function(value){
		            	        		return  '<img src="'+value+'" width="40" height="40" />';
		            	        	  }
		            	          },
		            	          { header: 'Producto',  dataIndex: 'producto',flex:2 },
		            	          { header: 'Cantidad', dataIndex: 'cantidad', flex: 1 }
		            	      ]
		            }]
		        }
		});
		this.callParent(arguments);
	}	
});