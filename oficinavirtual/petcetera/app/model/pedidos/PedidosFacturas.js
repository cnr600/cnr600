Ext.define('Iphoenix.model.pedidos.PedidosFacturas', {
	extend : 'Ext.data.Model',
	idProperty : 'pedido', 
	fields :[
			{name : 'pedido', type : 'string'},
			{name : 'archivo', type : 'string'},
			{name : 'created', type : 'date',dateFormat : 'd-m-Y'},
			{name : 'estatusnombre', type : 'string'},
			{name : 'estatusnombre', type : 'string'},
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
			{name : 'telefono' ,type:'string'},
			{name : 'direccion',
				type:'string',
				convert: function(value, record) {
					var calle=record.get('calle')+ " "+record.get('numero')+" "+record.get('colonia')+" ";
					var direccion1=record.get('cp')+" "+record.get('municipio')+" "+record.get('ciudad')+", "+record.get('estado')+", "+record.get('pais');
					return "<br/><br/>"+calle+direccion1;
					}
				
			}
			
			]
});