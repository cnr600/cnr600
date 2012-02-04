Ext.define('Iphoenix.model.ventas.Clientes', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
			{name : 'id', type : 'string'},
			{name : 'cliente', type : 'string'},
			{name : 'titulo', type : 'string'},
			{name : 'nombre', type : 'string'},
			{name : 'apaterno', type : 'string'},
			{name : 'amaterno', type : 'string'},
			{name : 'sexo', type : 'string'},
			{name : 'fechanac', type : 'date',dateFormat : 'd-m-Y'},
			{name : 'comentarios', type : 'string'},
			{name : 'created', type : 'date',dateFormat : 'd-m-Y'},
			{name : 'nacmascota', type : 'date',dateFormat : 'd-m-Y'},
			{name : 'mascota', type:'string'},
			{name : 'calle', type:'string'},
			{name : 'numero', type:'string'},
			{name : 'colonia', type:'string'},
			{name : 'cp', type:'string'},
			{name : 'municipio', type:'string'},
			{name : 'ciudad', type:'string'},
			{name : 'estado', type:'string'},
			{name : 'pais', type:'string'},
			{name : 'lastvisit', type:'string'},
			{name : 'tipo', type:'int'},
			{name : 'tipodireccion', type:'string'},
			
			{name:'nombre1',
				type:'string',
				convert: function(value, record) {
					return record.get('nombre') + " " +
					record.get('apaterno');
					}
				
			}
	
		
			]
});