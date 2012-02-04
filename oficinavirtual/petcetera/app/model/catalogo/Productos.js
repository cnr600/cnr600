Ext.define('Iphoenix.model.catalogo.Productos', {
	extend : 'Ext.data.Model',
	idProperty : 'id_Productos', 
	fields :[
			{name : 'idProductos', type : 'string'},
			{name : 'nombre', type : 'string'},
			{name : 'preciovendedor', type : 'float'},
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