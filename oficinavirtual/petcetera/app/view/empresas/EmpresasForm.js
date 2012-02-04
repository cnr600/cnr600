Ext.define('Iphoenix.view.empresas.EmpresasForm',{
	extend:'Ext.form.Panel',
	alias:'widget.EmpresasForm',
	id:'EmpresasForm',
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
		                title:'Datos de facturaci&oacute;n',
		                defaultType: 'textfield',

		                items: [ {
		                    fieldLabel: 'Nombre o Razon social',
		                    name: 'frazonsocial',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Alias',
		                    name: 'falias'
		                },{
		                    fieldLabel: 'RFC',
		                    name: 'frfc',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Calle',
		                    name: 'fcalle',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Numero',
		                    name: 'fnumero',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Colonia',
		                    name: 'fcolonia',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'C&oacute;digo postal',
		                    name: 'fcp',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Delegacion o municipio',
		                    name: 'fmunicipio'
		                },{
		                    fieldLabel: 'Ciudad',
		                    name: 'fciudad',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Estado',
		                    name: 'festado',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Pais',
		                    name: 'fpais',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Tel&eacutelfono',
		                    name: 'telefono'
		                },{
		                    xtype: 'hiddenfield',
		                    name: 'id'
		                }]
		                
		            }]
		        }
		});
		this.callParent(arguments);
	}	
});