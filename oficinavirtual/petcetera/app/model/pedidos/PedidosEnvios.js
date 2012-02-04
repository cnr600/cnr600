Ext.define('Iphoenix.model.pedidos.PedidosEnvios', {
	extend : 'Ext.data.Model',
	idProperty : 'id', 
	fields :[
			{name : 'id', type : 'int'},
			{name : 'pedido', type : 'string'},
			{name : 'recibe', type : 'string'},	
			{name : 'guia', type : 'string'},
			{name : 'calle', type : 'string'},
			{name : 'numero', type : 'string'},
			{name : 'colonia', type : 'string'},
			{name : 'cp', type : 'string'},
			{name : 'municipio', type : 'string'},
			{name : 'ciudad', type : 'string'},
			{name : 'estado', type : 'string'},
			{name : 'pais', type : 'string'},
			{name : 'telefono', type : 'string'},
			{name : 'telcel', type : 'string'},
			{name : 'email', type : 'string'},
			{name : 'notas', type : 'string'},
			{name : 'estatus', type : 'string'},
			{name : 'estatusnombre', type : 'string'},
			{name:'direccion',
				type:'string',
				convert: function(value, record) {
					var calle=record.get('calle')+ " "+record.get('numero')+" "+record.get('colonia')+" ";
					var direccion1=record.get('cp')+" "+record.get('municipio')+" "+record.get('ciudad')+", "+record.get('estado')+", "+record.get('pais');
					return "Direcci&oacute;n: "+calle+direccion1;
					}
				
			}

			]
});