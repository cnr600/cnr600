Ext.define('Iphoenix.model.productos.Clasificaciones', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
			{name : 'id', type : 'int'},
			{name : 'text', type : 'string'},
			{name : 'iconCls', type:'string'},
			{name : 'Leaf', type : 'string'},
			{name : 'parent_Id', type : 'int'},
			{name : 'active', type : 'int'},
			]
});