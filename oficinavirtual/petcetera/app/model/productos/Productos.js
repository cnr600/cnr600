Ext.define('Iphoenix.model.productos.Productos', {
	extend : 'Ext.data.Model',
	idProperty : 'codigointerno', 
	fields :[
				{name : 'codigointerno', type : 'string'},
				{name : 'codigodebarras', type : 'string'},
				{name : 'nombre', type : 'string'},
				{name : 'talla', type : 'string'},
				{name : 'preciovendedor', type : 'float'},
				{name : 'precioprovedor', type : 'float'},
				{name : 'preciopublico', type : 'float'},
				{name : 'precioempleado', type : 'float'},
				{name : 'peso', type : 'float'},
				{name : 'imagen', type : 'string'},
				{name : 'meta_keywords', type : 'string'},
				{name : 'clasificacion', type : 'int'},
				{name : 'parent_id', type : 'int'},
				{name : 'clasificacionnombre', type : 'string'},
				{name : 'provedor', type : 'int'},
				{name : 'puntodereorden', type : 'int'},
				{name : 'reordensugerido', type : 'int'},
				{name : 'existenciareal', type : 'int'},
				{name : 'existenciaconreservas', type : 'int'},
				{name : 'premium', type:'int'},
				{name : 'active', type:'boolean'},
				{name : 'descripcion', type : 'string'},
				{name:'imagenurl',
					type:'string',
					convert: function(value, record) {
						return "../../emexica/emk2/resources/images/productos/"+record.get('imagen');
						}
					
				}
				]
	});
			