Ext.define('Iphoenix.model.reportes.VentasPorProducto', {
	extend : 'Ext.data.Model',
	idProperty : 'codigointerno', 
	fields :[
			{name : 'codigointerno', type : 'string'},
			{name : 'nombre', type : 'string'},
			{name : 'mes', type : 'int'},
			{name : 'ano', type : 'int'},
			{name : 'cantidad', type : 'int'},	
			{name : 'total', type : 'float'}

			]
});