Ext.define('Iphoenix.model.pedidos.Pedidos', {
	extend : 'Ext.data.Model',
	idProperty : 'idpedidos', 
	fields :[
			{name : 'idpedidos', type : 'string'},
			{name : 'vendedor', type : 'int'},
			{name : 'envio', type : 'boolean'},
			{name : 'factura', type : 'boolean'},
			{name : 'cliente', type : 'int'},
			{name : 'idcliente', type : 'string'},
			{name : 'tipopedido', type : 'string'},
			{name : 'idempleado', type : 'string'},
			{name : 'tipodepago', type : 'string'},
			{name : 'fecha', type : 'date',dateFormat : 'd-m-Y'},
			{name : 'cantidad', type : 'int'},
			{name : 'peso', type : 'float'},
			{name : 'descpremiumpercent', type : 'float'},
			{name : 'descpremium', type : 'float'},
			{name : 'descpremiumotros', type : 'float'},
			{name : 'desclineapercent', type : 'float'},
			{name : 'desclinea', type : 'float'},
			{name : 'desclineaotros', type : 'float'},
			{name : 'subtotal', type : 'float'},
			{name : 'costoenvio', type : 'float'},
			{name : 'total', type : 'float'},
			{name : 'estatus', type : 'string'},
			{name : 'estatusid', type : 'string'},
			{name:'envio1',	type:'int',
				convert: function(value, record) {
					var x=0;
					if(record.get('envio')){
						x=1;
					}
					return x;
					}				
			},{name:'factura1',	type:'int',
				convert: function(value, record) {
					var x=0;
					if(record.get('factura')){
						x=1;
					}
					return x;
					}				
			},{name:'cliente1',	type:'int',
				convert: function(value, record) {
					var x=0;
					if(record.get('cliente')){
						x=1;
					}
					return x;
					}				
			},{name:'descuento',	type:'float',
				convert: function(value, record) {
					
					return record.get('desclinea')+record.get('desclineaotros')+record.get('descpremium')+record.get('descpremiumotros');
					}				
			}

	
		
			]
});