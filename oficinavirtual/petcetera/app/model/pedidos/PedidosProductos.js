Ext.define('Iphoenix.model.pedidos.PedidosProductos', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
			{name : 'id', type : 'int'},
			{name : 'pedido', type : 'string'},
			{name : 'idproducto', type : 'string'},
			{name : 'producto', type : 'string'},
			{name : 'imagen', type : 'string'},
			{name : 'cantidad', type:'int'},
			{name : 'peso', type : 'float'},
			{name : 'precio', type : 'float'},
			{name : 'total', type : 'float'},
			{name:'imagenurl',
				type:'string',
				convert: function(value, record) {
					return "../../emexica/emk2/resources/images/productos/"+record.get('imagen');
					}
				
			}
			]
});