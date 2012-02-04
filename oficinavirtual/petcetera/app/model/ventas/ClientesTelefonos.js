Ext.define('Iphoenix.model.ventas.ClientesTelefonos', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
			{name : 'id', type : 'string'},
			{name : 'telefono', type : 'string'},
			{name : 'tipo', type : 'string'},
			{name : 'tiponombre', type : 'string'},
			{name : 'cliente', type : 'string'}
	
		
			]
});