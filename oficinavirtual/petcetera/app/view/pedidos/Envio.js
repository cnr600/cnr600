Ext.define('Iphoenix.view.pedidos.Envio',{
	extend:'Ext.form.Panel',
	alias:'widget.Envio',
	initComponent:function(){
		Ext.apply(this,{
			 title: 'Datos de envio',
             layout: 'anchor',
           // iconCls:'envio',
             flex:0.3,
             collapsible:true,
             
             defaults: {
                 anchor: '100%',
                 margin:'10'
             },
             items: [{
                 xtype: 'checkbox',
                 id:'envionuevopedido',
                 disabled:false,
                 name: 'envio',
                 boxLabel: '&iquest;Requiere env&iacute;o a domicilio?',
                 hideLabel: true,
                 checked: false,
                 style: 'margin-bottom:10px',

                 /**
                  * Enables or disables the billing address fields according to whether the checkbox is checked.
                  * In addition to disabling the fields, they are animated to a low opacity so they don't take
                  * up visual attention.
                  */
                 handler: function(me, checked) {
                 	if(checked){
                 		  var envio=Ext.getCmp('npenvio');
                 		  envio.setValue(Ext.getCmp('npenviotemp').getValue());
		                    	var total=Ext.getCmp('nptotal');
		                    	var total1=total.getValue();
		                    	total1=total1+60;
		                    	total.setValue(total1);
 		                     
 		                     
 		                     var envio1=0;
 		                Ext.getCmp('erecibe').enable();
                 		Ext.getCmp('ecalle').enable();
                 		Ext.getCmp('enum').enable();
                 		Ext.getCmp('ecp').enable();
                 		Ext.getCmp('ecolonia').enable();
                 		Ext.getCmp('emunicipio').enable();
                 		Ext.getCmp('eciudad').enable();
                 		Ext.getCmp('eestado').enable();
                 		Ext.getCmp('epais').enable();
                 		Ext.getCmp('etel').enable();
                 		Ext.getCmp('etelcel').enable();
                 	}else{
                 		Ext.getCmp('erecibe').disable();
                 		Ext.getCmp('ecalle').disable();
                 		Ext.getCmp('enum').disable();
                 		Ext.getCmp('ecp').disable();
                 		Ext.getCmp('ecolonia').disable();
                 		Ext.getCmp('emunicipio').disable();
                 		Ext.getCmp('eciudad').disable();
                 		Ext.getCmp('eestado').disable();
                 		Ext.getCmp('epais').disable();
                 		Ext.getCmp('etel').disable();
                 		Ext.getCmp('etelcel').disable();
                 		var envio=Ext.getCmp('npenvio');
	                     var envio1=envio.getValue();
	                  var envio=Ext.getCmp('npenvio');
	                    	 envio.setValue(0);
	                    	var total=Ext.getCmp('nptotal');
	                    	var total1=total.getValue();
	                    	total1=total1-Ext.getCmp('npenviotemp').getValue();
	                    	total.setValue(total1);
                 	}
                 }
             },{
                 xtype: 'textfield',
                 id:'erecibe',
                 fieldLabel: 'Persona que recibe',
                 name: 'erecibe',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             }, {
                 xtype: 'textfield',
                 id:'ecalle',
                 fieldLabel: 'Calle',
                 name: 'ecalle',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'enum',
                 fieldLabel: 'Num',
                 name: 'enum',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'ecp',
                 fieldLabel: 'CP',
                 name: 'ecp',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'ecolonia',
                 fieldLabel: 'Colonia',
                 name: 'ecolonia',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'emunicipio',
                 fieldLabel: 'Delegaci&oacute;n o municipio',
                 name: 'emunicipio',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'eciudad',
                 fieldLabel: 'Ciudad',
                 name: 'eciudad',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'eestado',
                 fieldLabel: 'Estado',
                 name: 'eestado',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'epais',
                 fieldLabel: 'Pais',
                 name: 'epais',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },{
                 xtype: 'textfield',
                 id:'etel',
                 fieldLabel: 'Tel&eacute;fono',
                 name: 'etel',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             },
             {
                 xtype: 'textfield',
                 id:'etelcel',
                 fieldLabel: 'Celular',
                 name: 'etelcel',
                 //style: 'opacity:.3',
                 disabled: true,
                 allowBlank: false
             }]
		});
		this.callParent(arguments);
	}
	
});