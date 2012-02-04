Ext.define('Iphoenix.view.pedidos.Facturacion',{
	extend:'Ext.form.Panel',
	alias:'widget.Facturacion',
	title:'facturacion',
	iconCls:'facturacion',
	initComponent:function(){
		Ext.apply(this,{
			xtype:'fieldset',
			 title: 'Datos de Facturaci&oacute;n',
             layout: 'anchor',
             flex:0.3,
             collapsible:true,
             tools:[
            	{
            	    type:'help',
            	    tooltip: 'Ayuda',
            	    handler: function(event, toolEl, panel){
            	        // show help here
            	    }
            	}],
             defaults: {
                 anchor: '100%',
                 margin:'10'
             },
             items: [{
                 xtype: 'checkbox',
                 id:'pruebadecobro11',
                 name: 'factura',
                 boxLabel: '&iquest;Requiere factura?',
                 hideLabel: true,
                 checked: false,
                 style: 'margin-bottom:10px',

                 handler: function(me, checked) {
                 	if(checked){
                 			Ext.getCmp('razonsocial').enable();
                 		Ext.getCmp('rfc').enable();
                 		Ext.getCmp('fcalle').enable();
                 		Ext.getCmp('fnum').enable();
                 		Ext.getCmp('fcp').enable();
                 		Ext.getCmp('fcolonia').enable();
                 		Ext.getCmp('fmunicipio').enable();
                 		Ext.getCmp('fciudad').enable();
                 		Ext.getCmp('festado').enable();
                 		Ext.getCmp('fpais').enable();
                 		Ext.getCmp('ftel').enable();
                 		Ext.getCmp('combonuevopedidoempresa').enable();
                 		Ext.getCmp('crearempresafactbutton').enable();
                 	}else{
                 		Ext.getCmp('razonsocial').disable();
                 		Ext.getCmp('rfc').disable();
                 		Ext.getCmp('fcalle').disable();
                 		Ext.getCmp('fnum').disable();
                 		Ext.getCmp('fcp').disable();
                 		Ext.getCmp('fcolonia').disable();
                 		Ext.getCmp('fmunicipio').disable();
                 		Ext.getCmp('fciudad').disable();
                 		Ext.getCmp('festado').disable();
                 		Ext.getCmp('fpais').disable();
                 		Ext.getCmp('ftel').disable();
                 		Ext.getCmp('combonuevopedidoempresa').disable();
                 		Ext.getCmp('crearempresafactbutton').disable();
                 	}
                 }
                 
             },{
             	xtype:'combo',
            	id:'combonuevopedidoempresa',
            	name:'empresa',
                disabled:true, 
            	fieldLabel: 'Selecciona una empresa',
                store: 'empresas.EmpresasStore',
                queryMode: 'local',
                displayField: 'razonsocial',
                valueField: 'id',
                allowBlank:false,
                listeners:{
                	change:function(a,b){
                		
                		var rec=Ext.getStore('empresas.EmpresasStore').findRecord('id',b);
                		Ext.getCmp('razonsocial').setValue(rec.get('razonsocial'));
                		Ext.getCmp('rfc').setValue(rec.get('rfc'));
                 		Ext.getCmp('fcalle').setValue(rec.get('calle'));
                 		Ext.getCmp('fnum').setValue(rec.get('numero'));
                 		Ext.getCmp('fcp').setValue(rec.get('cp'));
                 		Ext.getCmp('fcolonia').setValue(rec.get('colonia'));
                 		Ext.getCmp('fmunicipio').setValue(rec.get('municipio'));
                 		Ext.getCmp('fciudad').setValue(rec.get('ciudad'));
                 		Ext.getCmp('festado').setValue(rec.get('estado'));
                 		Ext.getCmp('fpais').setValue(rec.get('pais'));
                 		Ext.getCmp('ftel').setValue(rec.get('telefono'));
                 		
                	}
                }
            },{
            	xtype:'button',
            	id:'crearempresafactbutton',
            	text:'Agregar nombre o empresa para facturaci&oacute;n',
            	iconCls:'add',
            	width:30,
            	disabled:true,
            	handler:function(){
            		 Ext.create('Ext.window.Window', {
            			 id:'NuevaEmpresa',
            			    title: 'Agregar nueva empresa',
            			    iconCls:'facturacion',
            			    height: 470,
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
            	     			        formBind: false, //only enabled once the form is valid
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
            	     			            }else{
            	     			            	 Ext.Msg.alert('Aviso', 'Favor de llenar todos los campos');
            	     			            }
            	     			        }
            	     			    }]
            	
            			    }]
            			}).show();
            	}
            }, {
            	xtype: 'displayfield',
                 id:'razonsocial',
                 fieldLabel: 'Nombre o raz&oacute;n social',
                 name: 'razonsocial',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	xtype: 'displayfield',
                 id:'rfc',
                 fieldLabel: 'RFC',
                 name: 'rfc',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fcalle',
                 fieldLabel: 'Calle',
                 name: 'fcalle',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fnum',
                 fieldLabel: 'Num',
                 name: 'fnum',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fcp',
                 fieldLabel: 'CP',
                 name: 'fcp',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fcolonia',
                 fieldLabel: 'Colonia',
                 name: 'fcolonia',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fmunicipio',
                 fieldLabel: 'Delegaci&oacute;n o Municipio',
                 name: 'fmunicipio',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fciudad',
                 fieldLabel: 'Ciudad',
                 name: 'fciudad',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'festado',
                 fieldLabel: 'Estado',
                 name: 'festado',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'fpais',
                 fieldLabel: 'Pais',
                 name: 'fpais',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
            	 xtype: 'displayfield',
                 id:'ftel',
                 fieldLabel: 'Tel&eacute;fono',
                 name: 'ftel',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             }]
		});
		this.callParent(arguments);
	}
});