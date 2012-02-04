Ext.define('Iphoenix.view.empresas.EmpresasPanel',{
	extend:'Ext.form.Panel',
	alias:'widget.EmpresasPanel',
	id:'EmpresasPanel',
	initComponent:function(){
		Ext.apply(this,{
		
			flex: 0.4,
		        border: false,
		        bodyBorder: false,
		        fieldDefaults: {
		            labelWidth: 100,
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
		                    fieldLabel: 'Nombre o Raz&oacute;n social',
		                    name: 'razonsocial',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Alias',
		                    name: 'alias'
		                },{
		                    fieldLabel: 'RFC',
		                    name: 'rfc',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Calle',
		                    name: 'calle',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'N&uacute;mero',
		                    name: 'numero',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Colonia',
		                    name: 'colonia',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'C&oacute;digo postal',
		                    name: 'cp',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Delegaci&oacute;n o municipio',
		                    name: 'municipio'
		                },{
		                    fieldLabel: 'Ciudad',
		                    name: 'ciudad',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Estado',
		                    name: 'estado',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Pa&iacute;s',
		                    name: 'pais',
		                    allowBlank:false
		                },{
		                    fieldLabel: 'Tel&eacute;fono',
		                    name: 'telefono',
		                    allowBlank:false
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