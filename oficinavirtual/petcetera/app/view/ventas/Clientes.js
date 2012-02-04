Ext.define('Iphoenix.view.ventas.Clientes',{
	extend:'Ext.panel.Panel',
	alias:'widget.Clientes',
	id:'Clientes',
	initComponent:function(){
		
	 

	    Ext.apply(this,{
	    	title: 'Clientes',
	    	iconCls: 'clientes',
	    	
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
	            
	            items: [
	                    {
	                    	xtype:'ClientesGrid'
	                    		
	                    },
	                    {
	                xtype:'ClientesPanel',
	            	tbar:[
	    			      {
	    			         icon: 'resources/images/icons/add.png',
	    			         text: 'Agregar cliente',
	    			         scope: this,
	    			         handler: this.onAddClick
	    			     },'->', {
	    			         icon: 'resources/images/icons/save.png',
	    			         text: 'Guardar cambios',
	    			         scope: this,
	    			         handler: this.onEditClick
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
			        xtype: 'ClientesForm',
			    	id:'2',
	 			     buttons: [{
	     			        text: 'Borrar',
	     			        handler: function() {
	     			            this.up('form').getForm().reset();
	     			        }
	     			    }, {
	     			        text: 'Guardar',
	     			        formBind: true, //only enabled once the form is valid
	     			        disabled: false,
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
	    
	    onEditClick: function(button){
	    	 var form= button.up('form');
	         
	         var loginForm=form.getForm();
	         if (loginForm.isValid()) {
	        		loginForm.submit({
	        			url: 'resources/data/ventas/Clientes.class.php?info=edit',
	        			
	        			success: function(f,a){
	        				 Ext.example.msg("Aviso", 'Se han actualizado los datos correctamente'); 
	        				 Ext.getStore('ventas.ClientesStore').load();
	        				
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