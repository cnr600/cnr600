Ext.define('Iphoenix.model.pedidos.Productos', {
	extend : 'Ext.data.Model',
	idProperty : 'idproductos', 
	fields :[
			{name : 'idproductos', type : 'int'},
			{name : 'nombre', type : 'string'},
			{name : 'preciovendedor', type : 'auto'},
			{name : 'peso', type : 'float'},
			{name : 'imagen', type : 'string'},
			{name : 'meta_keywords', type : 'string'},
			{name : 'clasificacion', type : 'string'},
			{name : 'premium', type:'int'},
			{name : 'descripcion', type : 'string'},
			{name:'imagenurl',
				type:'string',
				convert: function(value, record) {
					return "../../emexica/emk2/resources/images/productos/"+record.get('imagen');
					}
				
			}
			]
});