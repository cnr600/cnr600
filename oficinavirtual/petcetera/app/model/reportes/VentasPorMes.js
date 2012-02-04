Ext.define('Iphoenix.model.reportes.VentasPorMes', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
			{name : 'id', type : 'string'},
			
			{name : 'mes', type : 'int'},
			{name : 'ano', type : 'int'},
			{name : 'cantidad', type : 'int'},	
			{name : 'total', type : 'float'}

			]
});