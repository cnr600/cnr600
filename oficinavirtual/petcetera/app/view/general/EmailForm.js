Ext.define('Iphoenix.view.general.EmailForm',{
	extend:'Ext.form.Panel',
	alias:'widget.EmailForm',
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
		    	id:'tipoemailform',
		    	fieldLabel: 'Tipo de correo electr&oacute;nico',
		    	name:'tipoemail',
		        store: 'general.ContactoTipoEmailStore',
		        queryMode: 'local',
		        displayField: 'nombre',
		        valueField: 'id',
		        allowBlank:false
		    },{
		        fieldLabel: 'Correo Electr&oacute;nico',
		        id:'emailform',
		        name: 'email',
		        vtype:'email',		        
		        allowBlank: false
		    },{
		        xtype: 'hiddenfield',
		        id:'clienteemailform',
		        name: 'vendedor'
		    },{
		        xtype: 'hiddenfield',
		        id:'clienteemailid',
		        name: 'id'
		    }]
		});
		this.callParent(arguments);
	}
});