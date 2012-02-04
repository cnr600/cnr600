Ext.define('Iphoenix.model.ventas.ClientesEmails', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
	         {name : 'id', type : 'int'},
			{name : 'email', type : 'string'},
			{name : 'tipo', type : 'string'},
			{name : 'tiponombre', type : 'string'},
			{name : 'cliente', type : 'string'}
	
		
			]
});