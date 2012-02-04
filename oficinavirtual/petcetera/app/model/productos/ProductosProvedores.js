Ext.define('Iphoenix.model.productos.ProductosProvedores', {
	extend : 'Ext.data.Model',
	idProperty : 'Id_Productos', 
	fields :[
			{name : 'IdProductos', type : 'int'},
			{name : 'nombre', type : 'string'},
			{name : 'precio', type : 'float'},
			{name : 'sku', type : 'string'},
			{name : 'modelo', type : 'string'},
			{name : 'date_added', type : 'date'},
			{name : 'date_modified', type:'date'},
			{name : 'peso', type : 'float'},
			{name : 'status', type : 'boolean'},
			{name : 'descripcion_corta', type : 'string'},
			{name : 'descripcion', type : 'string'},
			{name : 'keyword', type : 'string'},
			{name : 'tags', type:'string'},
			{name : 'meta_keywords', type:'string'},
			{name : 'meta_descripcion', type:'string'},
			{name : 'imagen', type:'string'}
			]
});