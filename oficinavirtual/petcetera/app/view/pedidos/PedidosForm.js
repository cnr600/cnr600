Ext.define('Iphoenix.view.pedidos.PedidosForm',{
	extend:'Ext.form.Panel',
	alias:'widget.UsersDetalleForm',
	initComponent:function(){
		
		Ext.apply(this,{
		
			tbar:[
			      {
			         icon: 'resources/images/icons/delete.png',
			         text: 'Eliminar',
			         scope: this,
			         handler: this.onDeleteClick
			     },'->', {
			         icon: 'resources/images/icons/save.png',
			         text: 'Guardar cambios',
			         scope: this,
			         handler: this.onEditClick
			     }
			     			      ],
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            margin: '0 0 0 5',
            items: [{
                margin: '5',
                xtype: 'fieldset',
                flex: 1,
                
                defaults: {
                    width: 240,
                    labelWidth: 90
                },
                defaultType: 'textfield',
                items: [{
                	id:'UsernameField',
                    fieldLabel: 'Usuario',
                    name: 'username',
                    readOnly: true
                },{
                    fieldLabel: 'Nombre',
                    name: 'nombre'
               
                },{
                    fieldLabel: 'Apellido',
                    name: 'apaterno'
                   
                },{
                    fieldLabel: 'Apellido M',
                    name: 'amaterno'
                   
                },{
                    fieldLabel: 'Email',
                    name: 'email'
                   
                },{
                    fieldLabel: 'Email A',
                    name: 'email2'
                   
                },{
                    fieldLabel: 'Creado',
                    name: 'created',
                    readOnly:true
                   
                },{
                	xtype: 'checkboxfield',
                	boxLabel: 'Activo',
                	name: 'active',
                	inputValue: "1",
                	id:'active',
                	uncheckedValue: "0",
                	checked: false
                	}]
            }]
		});
		this.callParent(arguments);
	},
	 onDeleteClick: function(){
		 
		 
		  
	        var objPanel = Ext.getCmp('UsersGrid');
	        var selection = objPanel.getView().getSelectionModel().getSelection()[0];
	        if (selection) {
	        	Ext.Msg.confirm(
	   				 "Aviso",
	   				 "Estas seguro de eliminar al usuario "+selection.getId()+"?",
	   				 function(btnText) {
	   				 if (btnText == "yes") {
	   					Ext.Ajax.request({
	   		        	    url: 'resources/data/users/Users.class.php?info=delete',
	   		        	    
	   		        	    params: {
	   		        	           username:selection.getId()
	   		        	    },
	   		        	    success: function(response){
	   		        	    	Ext.getStore('users.UsersStore').load();
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
	    },
	    
	    onEditClick: function(button){
	    	 var form= button.up('form');
	         
	         var loginForm=form.getForm();
	         if (loginForm.isValid()) {
	        		loginForm.submit({
	        			url: 'resources/data/users/Users.class.php?info=edit',
	        			
	        			success: function(f,a){
	        				 Ext.example.msg("Aviso", 'Se han actualizado los datos correctamente'); 
	        				 Ext.getStore('users.UsersStore').load();
	        				
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
})