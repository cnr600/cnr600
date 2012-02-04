Ext.define('Iphoenix.view.pedidos.AgregaProductos',{
	extend:'Ext.grid.Panel',
	alias:'widget.AgregaProductos',
    requires:['Ext.selection.CellModel',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.ux.CheckColumn'],
	initComponent:function(){
		
		 function onAgregarProductoPremium(cantidad,precio,peso){
		    	
			 var cantidadCmp=Ext.getCmp('premiumcantidad');
		    	var subtotalCmp=Ext.getCmp('premiumsubtotal');
		    	var descpercentCmp=Ext.getCmp('premiumdescperc');
		    	var descStringCmp=Ext.getCmp('premiumdescuentostring');
		    	var descpedCmp=Ext.getCmp("premiumdescped");
		    	var descOtrosCmp=Ext.getCmp("premiumdescotros");
		    	var descacumCmp=Ext.getCmp('premiumdescacum');
		    	var subtotaldescCmp=Ext.getCmp('premiumsubtotaldesc');
		    	var descmesCmp=Ext.getCmp('totaldescuentodelmespremium');
		    	var comprasmesCmp=Ext.getCmp('totalcomprasdelmespremium');
		    //	var pesoCmp=Ext.getCmp('premiumpeso');
		    	
		    	var comprasmes=comprasmesCmp.getValue();
		    	var descmes=descmesCmp.getValue();
		    	var pesototal=peso*cantidad;
		    	var subtotalnuevo=cantidad*precio;
		    	var cantidadtotal=cantidadCmp.getValue();
		    	var subtotal=subtotalCmp.getValue();
		    	var descpercent=descpercentCmp.getValue();
		    	var descped=descpedCmp.getValue();
		    	
		    	var subtotaldesc=subtotaldescCmp.getValue();
		    	subtotalCmp.setValue(subtotalnuevo+subtotalCmp.getValue());
		    	var totalcompras=comprasmes+subtotalCmp.getValue();
	
	
		    	 if(totalcompras>=4501&&totalcompras<=9000){
	            	 
		    		 descpercentCmp.setValue(0.02);
		    		 descStringCmp.setValue('2%');

	         	
	          }else if(totalcompras>=9001){
	        	  descpercentCmp.setValue(0.05); 
	        	  descStringCmp.setValue('5%');
	  
	          }
		    	 var descacum=(totalcompras*descpercentCmp.getValue())-descmes; 
		    	 console.log("mes"+descacum);
		    	 cantidadCmp.setValue(cantidad+cantidadCmp.getValue());
			 
			    	//pesoCmp.setValue(pesototal+pesoCmp.getValue());
			    	descpedCmp.setValue(descpercentCmp.getValue()*subtotalCmp.getValue());
			    	var otrospedidosupdate=(descpercentCmp.getValue()*comprasmes)-descmes;
			    	descOtrosCmp.setValue(otrospedidosupdate);
			    	descacumCmp.setValue(descacum);
			    	subtotaldescCmp.setValue(subtotalCmp.getValue()-(descacumCmp.getValue()));
			    	
			    	Ext.getCmp('nptotal').setValue(Ext.getCmp('npenvio').getValue()+Ext.getCmp('premiumsubtotaldesc').getValue()+Ext.getCmp('lineasubtotaldesc').getValue());
		    };
		    function onAgregarProductoLinea(cantidad,precio,peso){
		    	var cantidadCmp=Ext.getCmp('lineacantidad');
		    	var subtotalCmp=Ext.getCmp('lineasubtotal');
		    	var descpercentCmp=Ext.getCmp('lineadescperc');
		    	var descStringCmp=Ext.getCmp('lineadescuentostring');
		      	var descpedCmp=Ext.getCmp("lineadescped");
		    	var descOtrosCmp=Ext.getCmp("lineadescotros");
		    	var descacumCmp=Ext.getCmp('lineadescacum');
		    	var subtotaldescCmp=Ext.getCmp('lineasubtotaldesc');
		    	var descmesCmp=Ext.getCmp('totaldescuentodelmeslinea');
		    	var comprasmesCmp=Ext.getCmp('totalcomprasdelmeslinea');
		    //	var pesoCmp=Ext.getCmp('lineapeso');
		    	
		    	var comprasmes=comprasmesCmp.getValue();
		    	var descmes=descmesCmp.getValue();
		    	var pesototal=peso*cantidad;
		    	var subtotalnuevo=cantidad*precio;
		    	var cantidadtotal=cantidadCmp.getValue();
		    	var subtotal=subtotalCmp.getValue();
		    	var descpercent=descpercentCmp.getValue();
		    	var descped=descpedCmp.getValue();
		    	
		    	var subtotaldesc=subtotaldescCmp.getValue();
		    	subtotalCmp.setValue(subtotalnuevo+subtotalCmp.getValue());
		    	var totalcompras=comprasmes+subtotalCmp.getValue();
	
	
		    	 if(totalcompras>=1500&&totalcompras<=3000){
	            	 
		    		 descpercentCmp.setValue(0.03);
		    		 descStringCmp.setValue('3%');

	         	
	          }else if(totalcompras>=3001&&totalcompras<=6000){
	        	  descpercentCmp.setValue(0.05); 
	        	  descStringCmp.setValue('5%');
	  
	          }else if(totalcompras>=6001&&totalcompras<=12000){
	        	  descpercentCmp.setValue(0.07);
	        	  descStringCmp.setValue('7%');
	         
	          }else if(totalcompras>=12001&&totalcompras<=20000){
	        	  descpercentCmp.setValue(0.1);
	        	  descStringCmp.setValue('10%');
	  
	          }else if(totalcompras>=20001&&totalcompras<=35000){
	        	  descpercentCmp.setValue(0.12);
	        	  descStringCmp.setValue('12%');
	   
	          }else if(totalcompras>=35001&&totalcompras<=50000){
	        	  descpercentCmp.setValue(0.13);    
	        	  descStringCmp.setValue('13%');
	         	
	          }else if(totalcompras>50000){
	        	  descpercentCmp.setValue(0.15);
	        	  descStringCmp.setValue('15%');
	     
	          }
		    	 var descacum=(totalcompras*descpercentCmp.getValue())-descmes; 
		    	 console.log("mes"+descacum);
		    	 cantidadCmp.setValue(cantidad+cantidadCmp.getValue());
			    
			    	//pesoCmp.setValue(pesototal+pesoCmp.getValue());
			    	descpedCmp.setValue(descpercentCmp.getValue()*subtotalCmp.getValue());
		    	 var otrospedidosupdate=(descpercentCmp.getValue()*comprasmes)-descmes;
			    	descOtrosCmp.setValue(otrospedidosupdate);
			    	descacumCmp.setValue(descacum);
			    	subtotaldescCmp.setValue(subtotalCmp.getValue()-(descacumCmp.getValue()));
			    	
			    	Ext.getCmp('nptotal').setValue(Ext.getCmp('npenvio').getValue()+Ext.getCmp('lineasubtotaldesc').getValue()+Ext.getCmp('premiumsubtotaldesc').getValue());
		    };
		    var objStore =Ext.getStore("pedidos.NuevoPedidoStore");
		var objStore2 =Ext.getStore("productos.ProductosStore");
		 var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
	 	        clicksToEdit: 1
	 	    });
	       Ext.apply(this,{
	    	   border: false,
		        editor: {
	                allowBlank: false
	            },
		        store:objStore2,
		    
		        selModel: {
		            selType: 'cellmodel'
		        },
		        plugins: [cellEditing],
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
		          },{
		        	  header: 'Imagen',
		              dataIndex: 'imagenurl',
		        	  weight:40,
		        	  renderer:function(value){
		        		return  '<img src="'+value+'" width="40" height="40" />';
		        	  }
		          },
	    		          {
	    		              header: 'Producto',
	    		              dataIndex: 'nombre',
	    		              sortable: false,
	    		              hideable: false,
	    		              flex: 2.5
	    		          }, {
	    		              header: 'Talla',
	    		              dataIndex: 'talla',
	    		              sortable: false,
	    		              hideable: false,
	    		              width:40
	    		          }, {
	    		              header: 'Peso',
	    		              dataIndex: 'peso',
	    		              sortable: false,
	    		              hideable: false,
	    		              flex: 2.5,
	    		              renderer:function(value){
	    		            	  return value+' Kg';
	    		              }
	    		          }
	    		          ,
	    		          {
	    		              header: 'Precio',
	    		              dataIndex: 'preciovendedor',
	    		              decimalSeparator :'.',
	    		              thousandSeparator :',',
	    		              renderer: function(value){
	    		            	  return '$ '+value;
	    		              },
	    		   
	    		              flex: 1
	    		          },{
	    		              header: 'En existencia',
	    		              dataIndex: 'existenciaconreservas',
	    		              flex: 1,
	    		              align:'center',
	    		              renderer:function(value,metadata,record){
	    		            	  var reorden=record.get('puntodereorden');
	    		            	  if(value>=reorden){
	    		            		  return '<img class="img-button" src="resources/images/icons/icon_status_green.gif" />';  
	    		            	  }
	    		            	  if(value<reorden&&value!=0){
	    		            		  return '<img class="img-button" src="resources/images/icons/icon_status_yellow.gif" />';  
	    		            	  }
	    		            	  if(value<=0){
	    		            		  return '<img class="img-button" src="resources/images/icons/icon_status_red.gif" />';  
	    		            	  }
	    		              }
	    		            
	    		             
	    		          },
	    		          {
	    		              header: 'Cantidad',
	    		              id:'cantidadp',
	    		              dataIndex: 'cantidad',
	    		              flex: 1,
	    		              editor: {
	    		                  xtype: 'numberfield',
	    		                  allowBlank: true,
	    		                  minValue: 0,
	    		                  maxValue: 1000,
	    		                  value:0
	    		              }
	    		          },{
	    		                xtype:'actioncolumn',
	    		                align: 'center',
	    		                width:50,
	    		                items: [{
	    		                    icon: 'resources/images/icons/add.png',  // Use a URL in the icon config
	    		                    tooltip: 'Agregar a pedido',
	    		                    handler: function(grid, rowIndex, colIndex) {
	//Agregando producto al pedido				    			                		                    
	    		                 
	    		                        var rec = grid.getStore().getAt(rowIndex);
	    		                        var idproducto=rec.get('codigointerno');
	    		                          var cantidad=rec.get('cantidad');
	    		                          var peso1=rec.get('peso');
	    		                      var precio=rec.get('preciovendedor');
	    		                   
	    		                      var subtotal1=cantidad*precio;
	    		                     
	    		                      var cantprod=Ext.getCmp('npcantidad');
	    		                     var numproductos=cantprod.getValue();
	    		                     numproductos=numproductos+cantidad;
	    		                     cantprod.setValue(numproductos);
	    		                     
	    		                     var pesoCmp=Ext.getCmp('nppeso');
	    		                     var peso=pesoCmp.getValue();
	    		                     peso=peso+(peso1*cantidad);
	    		                     pesoCmp.setValue(peso);
	    		                    
	    		                     var guiasCmp=Ext.getCmp('npguias');
	    		                     var guias=(Ext.getCmp('nppeso').getValue()/3)+0.45;
	    		                      guias=Math.round(guias);
	    		                      guiasCmp.setValue(guias);
	    		                     
	    		                      var envioTmp=Ext.getCmp('npenviotemp');
	    		                      envioTmp.setValue(guias*60);
	    		                      
	    		                      var enviobtn=Ext.getCmp('envionuevopedido');
	    		                      if(enviobtn.checked){
	    		                    	  Ext.getCmp('npenvio').setValue(Ext.getCmp('npenviotemp').getValue());
	    		                      }
	    		                     var subtotalcmp=Ext.getCmp('npsubtotal');
	    		                     var subtotal=subtotalcmp.getValue();
	    		                     
	    		                     subtotal=subtotal+subtotal1;
	    		                     subtotalcmp.setValue(subtotal);
	    		                     
	    		                  
	    		                     var premium=Ext.getCmp('lineapremiumcheck');
	    		                  
	    		                     
	    		                   if(premium.checked){
	    		                	   onAgregarProductoPremium(cantidad,precio,peso1);
	    		                   }else{
	    		                	   onAgregarProductoLinea(cantidad,precio,peso1);
	        		                    
	    		                   }
	    		                    
	    		                     var productname=rec.get('nombre');
	    		                  //   var total=rec.get('preciovendedor')*numproductos;
	    		                  
	    		                 if(cantidad){
	    		                     var rec = Ext.ModelManager.create(
	    		                    		  {
	    		                    		  codigointerno: idproducto,
	    		                    		  peso:peso,
	    		                    		  producto:productname ,
	    		                    		  cantidad: cantidad,
	    		                    		  precio:rec.get('preciovendedor'),
	    		                    		  total:subtotal1
	    		                    		  },'Iphoenix.model.pedidos.ProductosNuevoPedido');
	    		                      objStore.add(rec);
	    		                      Ext.getCmp('agregarpedido').destroy();
	    		                 }
	    		                    //  objStore.sync();
	    		                
	    		            	         
	    		            	       
	    		                       
	    		                    }
	    		                }]
	    		            }
	    		      ] 
	       });
	   	this.callParent(arguments);

	
	},
	onAddClick:function() {
		  
		  Ext.create('Ext.window.Window', {
			    title: 'Agregar producto',
			    height: 450,
			    width: 600,
			    layout: 'fit',
			    items: [{  
			        xtype: 'ProductosForm'
	
			    }]
			}).show();}
});