Ext.define('Iphoenix.model.pedidos.ProductosNuevoPedido', {
	extend : 'Ext.data.Model',
	idProperty : 'codigointerno', 
	fields :[
			{name : 'codigointerno', type : 'string'},
			{name : 'imagen', type : 'string'},
			{name : 'producto', type : 'string'},
			{name : 'cantidad', type:'int'},
			{name : 'precio', type : 'float'},
			{name : 'peso', type : 'float'},
			{name : 'total', type : 'float'},
			{name:'imagenurl',
				type:'string',
				convert: function(value, record) {
					return "resources/images/productos/"+record.get('imagen')+".png";
					}
				
			}
			]
});