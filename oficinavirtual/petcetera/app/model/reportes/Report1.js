Ext.define('Iphoenix.model.reportes.Report1', {
	extend : 'Ext.data.Model',
	idProperty : 'tipopedido', 
	fields :[
			{name : 'tipopedido', type : 'string'},
			{name : 'nombre', type : 'string'},
			{name : 'numpedidos', type : 'int'},
			{name : 'cantidad', type : 'int'},	
			{name : 'total', type : 'float'}

			]
});