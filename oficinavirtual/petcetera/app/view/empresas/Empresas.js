Ext.define('Iphoenix.view.empresas.Empresas',{
	extend:'Ext.panel.Panel',
	alias:'widget.Empresas',
	id:'Empresas',
	initComponent:function(){
		
	 

	    Ext.apply(this,{
	    	title: 'Empresas para facturaci&oacute;n',
	    	 iconCls:'facturacion',
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
	            
	            items: [
	                    {
	                    	xtype:'EmpresasGrid'
	                    		
	                    },
	                    {
	                xtype:'EmpresasPanel',
	            	tbar:[
	    			      {
	    			         icon: 'resources/images/icons/add.png',
	    			         text: 'Agregar empresa',
	    			         scope: this,
	    			         disabled:false,
	    			         handler: this.onAddClick
	    			     },'->', {
	    			         icon: 'resources/images/icons/save.png',
	    			         text: 'Guardar cambios',
	    			         scope: this,
	    			         disabled:false,
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
			 id:'NuevaEmpresa',
			    title: 'Agregar nueva empresa',
			    height: 450,
			    width: 450,
			    layout: 'fit',
			    items: [{  
			        xtype: 'EmpresasForm',
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
	     			                	url: 'resources/data/empresas/EmpresasFacturacion.class.php?info=add',
	     			        			   success: function(form, action) {
	     			                       Ext.Msg.alert('Success', action.result.msg);
	     			                       var win=Ext.getCmp('NuevaEmpresa');
	     			                       win.hide();
	     			                       win.destroy();
	     			                       Ext.getStore('empresas.EmpresasStore').load();
	     			                    },
	     			                    failure: function(form, action) {
	     			                        Ext.Msg.alert('Failed', action.result.msg);
	     			                       var win=Ext.getCmp('NuevaEmpresa');
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
	        			url: 'resources/data/empresas/EmpresasFacturacion.class.php?info=edit',
	        			
	        			success: function(f,a){
	        				 Ext.example.msg("Aviso", 'Se han actualizado los datos correctamente'); 
	        				 Ext.getStore('empresas.EmpresasStore').load();
	        				
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
	    },
		renderStatus:function(status) {
		    if(status) {
		      return '<img class="img-button" src="resources/images/icons/icon_status_green.gif" />';
		    }else {
		      return '<img class="img-button" src= "resources/images/icons/icon_status_red.gif" />';
		    }
		  }
});