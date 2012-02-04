Ext.define('Iphoenix.model.empresas.Empresas', {
	extend : 'Ext.data.Model',
	idProperty : 'id', a
	fields :[
			{name : 'id', type : 'int'},
			{name : 'vendedor', type : 'string'},
			{name : 'razonsocial', type : 'string'},
			{name : 'alias', type : 'string'},
			{name : 'rfc', type : 'string'},
			{name : 'calle', type : 'string'},
			{name : 'numero', type : 'string'},
			{name : 'colonia', type : 'string'},
			{name : 'cp', type : 'string'},
			{name : 'municipio' ,type:'string'},
			{name : 'ciudad' ,type:'string'},
			{name : 'estado' ,type:'string'},
			{name : 'pais' ,type:'string'},
			{name : 'telefono' ,type:'string'}
			]
});