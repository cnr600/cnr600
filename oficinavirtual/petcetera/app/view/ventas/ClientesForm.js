Ext.define('Iphoenix.view.ventas.ClientesForm',{
	extend:'Ext.form.Panel',
	alias:'widget.ClientesForm',
	id:'ClientesForm',
	initComponent:function(){
		Ext.apply(this,{
		
			flex: 0.4,
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
		                	allowBlank: false
		                	},{
		                    fieldLabel: 'Nombre(s)',
		                    name: 'nombre',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Apellido Paterno',
		                    name: 'apaterno',
		                    allowBlank: false
		                },{
		                    fieldLabel: 'Apellido Materno',
		                    name: 'amaterno'
		                },{
		                    xtype: 'radiogroup',
		                    fieldLabel: 'G&eacute;nero',
		                    width:250,
		                    columns: 2,
		                    allowBlank: false,
		                    items: [
		                        {boxLabel: 'Hombre', name: 'sexo', inputValue: 'Hombre'},
		                        {boxLabel: 'Mujer', name: 'sexo', inputValue: 'Mujer'}
		                    ]
		                }, {
		                    xtype: 'datefield',
		                    anchor: '100%',
		                    fieldLabel: 'Nacimiento',
		                    name: 'fechanac',
		                    format : 'd-m-Y',
		                    allowBlank: false
		                }]
		            },{
		                title:'Informaci&oacute;n de contacto',
		                defaultType: 'textfield',

		                items: [ {
		                	xtype:'tabpanel',
		                	  defaults:{
		  		                bodyStyle:'padding:10px'
		  		            },

		                	items:[{
		                		title:'Direccion',
		                		items:[{
				                	xtype:'combo',
				                	fieldLabel: 'Tipo de direcci&oacute;n',
				                	name:'tipo',
				                    store: 'general.ContactoTipoDireccionStore',
				                    queryMode: 'local',
				                    displayField: 'nombre',
				                    valueField: 'id',
				                    allowBlank:false
				                },
{
			                        xtype: 'textfield',
			                        fieldLabel: 'Calle',
			                        name: 'calle',
			                        allowBlank:false
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'Num',
			                        name: 'numero',
			                        allowBlank:false
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'CP',
			                        name: 'cp',
			                        allowBlank:false
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'Colonia',
			                        name: 'colonia',
			                        allowBlank:false
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'Delegaci&oacute;n o Municipio',
			                        name: 'municipio'
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'Ciudad',
			                        name: 'ciudad',
			                        allowBlank:false
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'Estado',
			                        name: 'estado',
			                        allowBlank:false
			                    },{
			                        xtype: 'textfield',
			                        fieldLabel: 'Pais',
			                        name: 'pais',
			                        allowBlank:false
			                    }
		                		       
		                		       
		                		       ]
		                	
		                	},{
		                		title:'Tel&eacute;fono',
		                		items:[
{
	xtype:'combo',
	fieldLabel: 'Tipo de direcci&oacute;n',
	name:'tipotelefono',
    store: 'general.ContactoTipoTelefonoStore',
    queryMode: 'local',
    displayField: 'nombre',
    valueField: 'id',
    allowBlank:false
},{
    xtype: 'textfield',
    fieldLabel: 'Tel&eacute;fono',
    name: 'telefono',
    allowBlank:false
}
		                		       ]
		                	},{
		                		title:'Correo electr&oacute;nico',
		                		items:[
{
	xtype:'combo',
	fieldLabel: 'Tipo de correo electr&oacute;nico',
	name:'tipoemail',
    store: 'general.ContactoTipoEmailStore',
    queryMode: 'local',
    displayField: 'nombre',
    valueField: 'id',
    allowBlank:false
},{
    xtype: 'textfield',
    fieldLabel: 'Correo electr&oacute;nico',
    name: 'email',
    vtype:'email',
    allowBlank:false
}
		                		       ]
		                	}]
		                }]
		                
		            }]
		        }
		});
		this.callParent(arguments);
	}	
});