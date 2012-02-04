Ext.define('Iphoenix.view.general.TelefonosForm',{
	extend:'Ext.form.Panel',
	alias:'widget.TelefonoForm',
	initComponent:function(){
		Ext.apply(this,{
		    bodyPadding: 5,
		    width: 350,
		    layout: 'anchor',
		    defaults: {
		        anchor: '100%'
		    },

		    // The fields
		    defaultType: 'textfield',
		    items: [{
		    	xtype:'combo',
		    	id:'tipotelefonoform',
		    	fieldLabel: 'Tipo de direcci&oacute;n',
		    	name:'tipotelefono',
		        store: 'general.ContactoTipoTelefonoStore',
		        queryMode: 'local',
		        displayField: 'nombre',
		        valueField: 'id',
		        allowBlank:false
		    },{
		        fieldLabel: 'Tel&eacute;fono',
		        id:'telefonoform',
		        name: 'telefono',
		        allowBlank: false
		    },{
		        xtype: 'hiddenfield',
		        id:'clientetelefonoform',
		        name: 'cliente'
		    },{
		        xtype: 'hiddenfield',
		        id:'clientetelefonoid',
		        name: 'id'
		    }]
		});
		this.callParent(arguments);
	}
});