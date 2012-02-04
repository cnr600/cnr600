Ext.define('Iphoenix.view.vendedor.VendedorInfo',{
	extend:'Ext.form.Panel',
	alias:'widget.VendedorInfo',
	id:'VendedorInfo',
	initComponent:function(){
		Ext.apply(this,{
			title:'Mi perfil',
			iconCls:'perfil',
			closable:true,
			flex: 0.4,
	        border: false,
	        bodyBorder: false,
	        listeners:{
	        	render:function(){
	        		Ext.Ajax.request({
    	    		    url: 'resources/data/login/User.info.php',
    	    		    params: {
    	    		        id: 1
    	    		    },
    	    		    success: function(response){
    	    		        text = Ext.JSON.decode(response.responseText);
    	    		        Ext.getCmp('user').setText(text.DATA.name);
    	    		        var rec = Ext.getStore('vendedor.VendedorStore').findRecord('idvendedor',text.DATA.vendedor);
    	                    var form =Ext.getCmp('VendedorInfo').getForm();
    	                    var fields = form.getFields();
    	                    // prevent change events from firing
    	                    fields.each(function(field){
    	                        field.suspendEvents();
    	                    });
    	                    form.loadRecord(rec);
    	                
    	                    fields.each(function(field){
    	                        field.resumeEvents();
    	                    });
    	                    console.log(rec.get('sexo'));
    	    		
    	    		    }
    	    		});
	        	}
	        },
	        fieldDefaults: {
	            labelWidth: 75,
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
	                	xtype: 'combo',
	                	fieldLabel: 'T&iacute;tulo',
	                	name: 'titulo',
	                	store: [
	                	['Sr.','Sr.'],
	                	['Sra.','Sra.'],
	                	['Srita.','Srita.']
	                	],
	                	forceSelection: true,
	                	multiSelect: false,
	                	anchor: '100%',
	                	allowBlank: false,
	                    readOnly:true
	                	},{
	                    fieldLabel: 'Nombre(s)',
	                    name: 'nombre',
	                    allowBlank:false,
	                    readOnly:true
	                },{
	                    fieldLabel: 'Apellido Paterno',
	                    name: 'apaterno',
	                    readOnly:true
	                },{
	                    fieldLabel: 'Apellido Materno',
	                    name: 'amaterno',
	                    readOnly:true
	                }/*,{
	                    xtype: 'radiogroup',
	                    fieldLabel: 'G&eacute;nero',
	                    width:250,
	                    columns: 2,
	                    items: [
	                        {boxLabel: 'Hombre', name: 'sexo', inputValue: 'Hombre'},
	                        {boxLabel: 'Mujer', name: 'sexo', inputValue: 'Mujer'}
	                    ]
	                }*/, {
	                    xtype: 'datefield',
	                    anchor: '100%',
	                    fieldLabel: 'Nacimiento',
	                    name: 'fechanac',
	                    readOnly:true
	                }]
	            },{
            		title:'Direcci&oacute;n',
            		items:[
            		       {
		                	xtype:'combo',
		                	fieldLabel: 'Tipo de direcci&oacute;n',
		                	name:'tipo',
		                    store: 'general.ContactoTipoDireccionStore',
		                    queryMode: 'local',
		                    displayField: 'nombre',
		                    valueField: 'id',
		                    allowBlank:false,
		                    readOnly:true
		                },{
                        xtype: 'textfield',
                        fieldLabel: 'Calle',
                        name: 'calle',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'N&uacute;mero',
                        name: 'numero',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'CP',
                        name: 'cp',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Colonia',
                        name: 'colonia',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Delegaci&oacute;n o Municipio',
                        name: 'municipio',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Ciudad',
                        name: 'ciudad',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Estado',
                        name: 'estado',
	                    readOnly:true
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Pa&iacute;s',
                        name: 'pais',
	                    readOnly:true
                    }
            		       
            		       
            		       ]
            	
            	},{
            		title:'Tel&eacute;fonos',
            		items:[
            		       	{
                        xtype:'grid',
                        width: 400,
                        store: 'vendedor.VendedorTelefonosStore',
                      /*  dockedItems: [Ext.create('Ext.toolbar.Paging', {
        		            dock: 'bottom',
        		            displayInfo: true,
        		            displayMsg: 'Tel&eacute;fonos {0} - {1} de {2}',
        		            emptyMsg: "No hay Tel&eacute;fonos",
        		            store: 'vendedor.VendedorTelefonosStore'
        		        })],
        		        tbar:['->',
    	    			      {
    	    			         icon: 'resources/images/icons/add.png',
    	    			         text: 'Agregar Tel&eacute;fono',
    	    			         scope: this,
    	    			         handler: this.onAddTelefono
    	    			     }
    	    			     			      ],*/
                        columns: [
                            { header: 'Tipo',  dataIndex: 'tipo',hidden:true },
                            { header: 'Tipo',  dataIndex: 'tiponombre'},
                            { header: 'Tel&eacute;fono', dataIndex: 'telefono',flex:1 }/*,
                            {
                                xtype:'actioncolumn',
                                width:50,
                                items: [{
                                	icon: 'resources/images/icons/edit.png',
                                    tooltip: 'Editar',
                                    handler:this.onEditTelefono
                                },{
                                	icon: 'resources/images/icons/delete.png',
                                    tooltip: 'Borrar',
                                    handler: function(grid, rowIndex, colIndex) {
                                        var rec = grid.getStore().getAt(rowIndex);
                                    	Ext.Msg.confirm(
           	            	   				 "Aviso",
           	            	   				 "Estas seguro de eliminar el tel&eacute;fono de "+rec.get('tiponombre')+" "+rec.get('telefono')+"?",
           	            	   				 function(btnText) {
           	            	   				 if (btnText == "yes") {
           	            	   					Ext.Ajax.request({
           	            	   		        	    url: 'resources/data/ventas/ClientesTelefonos.class.php?info=delete',
           	            	   		        	    
           	            	   		        	    params: {
           	            	   		        	           id:rec.get('id')
           	            	   		        	    },
           	            	   		        	    success: function(response){
           	            	   		        	    	Ext.getStore('ventas.ClientesTelefonosStore').load();
           	            	   		        	        var text = response.responseText;
           	            	   		        	  Ext.example.msg("Aviso",  text); 
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
                            }*/
                        ]
            		       
            		       
            		       	}]
            	
            	},{
            		title:'Correo electr&oacute;nico',
            		items:[
            		       	{
                        xtype:'grid',
                        width: 400,
                        store: 'vendedor.VendedorEmailsStore',
                       /* dockedItems: [Ext.create('Ext.toolbar.Paging', {
        		            dock: 'bottom',
        		            displayInfo: true,
        		            displayMsg: 'Tel&eacute;fonos {0} - {1} de {2}',
        		            emptyMsg: "No hay Tel&eacute;fonos",
        		            store: 'vendedor.VendedorEmailsStore'
        		        })],
        		        tbar:['->',
    	    			      {
    	    			         icon: 'resources/images/icons/add.png',
    	    			         text: 'Agregar Correo electr&oacute;nico',
    	    			         scope: this,
    	    			         handler: this.onAddEmail
    	    			     }
    	    			     			      ],*/
                        columns: [
                            { header: 'Tipo',  dataIndex: 'tipo',hidden:true },
                            { header: 'Tipo',  dataIndex: 'tiponombre' },
                            { header: 'Correo electr&oacute;nico', dataIndex: 'email', flex: 1 }/*,
                            {
                                xtype:'actioncolumn',
                                width:50,
                                items: [{
                                	icon: 'resources/images/icons/edit.png',
                                    tooltip: 'Editar',
                                    handler: this.onEditEmail
                                    },{
                                	icon: 'resources/images/icons/delete.png',
                                    tooltip: 'Borrar',
                                    handler: function(grid, rowIndex, colIndex) {
                                        var rec = grid.getStore().getAt(rowIndex);
                                
                                        Ext.Msg.confirm(
	           	            	   				 "Aviso",
	           	            	   				 "Estas seguro de eliminar el tel&eacute;fono de "+rec.get('tiponombre')+" "+rec.get('telefono')+"?",
	           	            	   				 function(btnText) {
	           	            	   				 if (btnText == "yes") {
	           	            	   					Ext.Ajax.request({
	           	            	   		        	    url: 'resources/data/ventas/ClientesEmails.class.php?info=delete',
	           	            	   		        	    
	           	            	   		        	    params: {
	           	            	   		        	           id:rec.get('id')
	           	            	   		        	    },
	           	            	   		        	    success: function(response){
	           	            	   		        	    	Ext.getStore('ventas.ClientesEmailsStore').load();
	           	            	   		        	        var text = response.responseText;
	           	            	   		        	  Ext.example.msg("Aviso",  text); 
	           	            	   		        	    },
	           	            	   		        	    failure: function(response){
	           	            	   		        	        var text = response.responseText;
	           	            	   		        	        Ext.Msg.alert('Aviso', text);
	           	            	   		        	    }
	           	            	   		        	});
                                    }
                                });
                            }}]}*/
                        ]
            		       
            		       
            		       	},{
    		                	xtype: 'hiddenfield',
    		                    name: 'id'
    		                }]
            	
            	}]
	        }
	});
	this.callParent(arguments);
},
onEditTelefono:function(grid, rowIndex, colIndex) {
    var rec = grid.getStore().getAt(rowIndex);

    
   // alert("Edit " + rec.get('cliente'));
    Ext.create('Ext.window.Window', {
        title: 'Editar telefono',
        id:'EditarTelefonoWindow',
        height: 150,
        width: 370,
        layout: 'fit',
        items: {  
           xtype:'TelefonoForm',
		    buttons: [{
		        text: 'Guardar',
		        formBind: true, //only enabled once the form is valid
		        disabled: true,
		        handler: function() {
		            var form = this.up('form').getForm();
		            if (form.isValid()) {
		                form.submit({
		                	url: 'resources/data/ventas/ClientesTelefonos.class.php?info=edit',
	        			   success: function(form, action) {
	        			 Ext.example.msg("Aviso",  action.result.msg); 
	                     
	                       var win=Ext.getCmp('EditarTelefonoWindow');
	                       win.hide();
	                       win.destroy();
	                       Ext.getStore('ventas.ClientesTelefonosStore').load();
	                    },
	                    failure: function(form, action) {
	                        Ext.Msg.alert('Failed', action.result.msg);
	                       var win=Ext.getCmp('EditarTelefonoWindow');
	                       win.hide();
	                       win.destroy();
	                    }
		                });
		            }
		        }
		    }]
        }
    }).show();
    Ext.getCmp('tipotelefonoform').setValue(rec.get('tipo'));
     Ext.getCmp('telefonoform').setValue(rec.get('telefono'));
    Ext.getCmp('clientetelefonoform').setValue(rec.get('cliente'));
    Ext.getCmp('clientetelefonoid').setValue(rec.get('id'));

},onAddTelefono:function(){
	 Ext.create('Ext.window.Window', {
		 	id:'AddTelefonoWindow',
            title: 'Editar telefono',
            height: 150,
            width: 370,
            layout: 'fit',
            items: {  
               xtype:'TelefonoForm',
   		    buttons: [{
   		        text: 'Guardar',
   		        formBind: true, //only enabled once the form is valid
   		        disabled: true,
   		        handler: function() {
   		            var form = this.up('form').getForm();
   		         var id=Ext.getCmp("ClientesGrid").getSelectionModel().getSelection()[0].getId();
   		         Ext.getCmp('clientetelefonoform').setValue(id);
   		            if (form.isValid()) {
   		                form.submit({
   		                	url: 'resources/data/ventas/ClientesTelefonos.class.php?info=add',
		        			   success: function(form, action) {
		        				   Ext.example.msg("Aviso",  action.result.msg); 
		                       var win=Ext.getCmp('AddTelefonoWindow');
		                       win.hide();
		                       win.destroy();
		                       Ext.getStore('ventas.ClientesTelefonosStore').load();
		                    },
		                    failure: function(form, action) {
		                        Ext.Msg.alert('Failed', action.result.msg);
		                       var win=Ext.getCmp('AddTelefonoWindow');
		                       win.hide();
		                       win.destroy();
		                    }
   		                });
   		            }
   		        }
   		    }]
            }
        }).show();
},
onEditEmail:function(grid, rowIndex, colIndex) {
    var rec = grid.getStore().getAt(rowIndex);

    
   // alert("Edit " + rec.get('cliente'));
    Ext.create('Ext.window.Window', {
        title: 'Editar Correo Electr&oacute;nico',
        id:'EditarEmailWindow',
        height: 150,
        width: 370,
        layout: 'fit',
        items: {  
           xtype:'EmailForm',
		    buttons: [{
		        text: 'Guardar',
		        formBind: true, //only enabled once the form is valid
		        disabled: true,
		        handler: function() {
		            var form = this.up('form').getForm();
		            if (form.isValid()) {
		                form.submit({
		                	url: 'resources/data/ventas/ClientesEmails.class.php?info=edit',
	        			   success: function(form, action) {
	        			 Ext.example.msg("Aviso",  action.result.msg); 
	                     
	                       var win=Ext.getCmp('EditarEmailWindow');
	                       win.hide();
	                       win.destroy();
	                       Ext.getStore('ventas.ClientesEmailsStore').load();
	                    },
	                    failure: function(form, action) {
	                        Ext.Msg.alert('Failed', action.result.msg);
	                       var win=Ext.getCmp('EditarEmailWindow');
	                       win.hide();
	                       win.destroy();
	                    }
		                });
		            }
		        }
		    }]
        }
    }).show();
    Ext.getCmp('tipoemailform').setValue(rec.get('tipo'));
     Ext.getCmp('emailform').setValue(rec.get('email'));
    Ext.getCmp('clienteemailform').setValue(rec.get('cliente'));
    Ext.getCmp('clienteemailid').setValue(rec.get('id'));

},onAddEmail:function(){
	 Ext.create('Ext.window.Window', {
		 	id:'AddEmailWindow',
            title: 'Editar Correo electr&oacutelnico',
            height: 150,
            width: 370,
            layout: 'fit',
            items: {  
               xtype:'EmailForm',
   		    buttons: [{
   		        text: 'Guardar',
   		        formBind: true, //only enabled once the form is valid
   		        disabled: true,
   		        handler: function() {
   		            var form = this.up('form').getForm();
   		         var id=Ext.getCmp("ClientesGrid").getSelectionModel().getSelection()[0].getId();
   		         Ext.getCmp('clienteemailform').setValue(id);
   		            if (form.isValid()) {
   		                form.submit({
   		                	url: 'resources/data/ventas/ClientesEmails.class.php?info=add',
		        			   success: function(form, action) {
		        				   Ext.example.msg("Aviso",  action.result.msg); 
		                       var win=Ext.getCmp('AddEmailWindow');
		                       win.hide();
		                       win.destroy();
		                       Ext.getStore('ventas.ClientesEmailsStore').load();
		                    },
		                    failure: function(form, action) {
		                        Ext.Msg.alert('Failed', action.result.msg);
		                       var win=Ext.getCmp('AddEmailWindow');
		                       win.hide();
		                       win.destroy();
		                    }
   		                });
   		            }
   		        }
   		    }]
            }
        }).show();
}
});