Ext.define('Iphoenix.model.pedidos.PedidosEstatus', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
	         {name : 'id', type : 'string'},
			{name : 'pedido', type : 'string'},
			{name : 'estatus', type : 'string'},
			{name : 'estatusnombre', type : 'string'},	
			{name : 'created', type : 'date',dateFormat : 'd-m-Y'},
			{name : 'descripcion', type : 'string'}

			]
});