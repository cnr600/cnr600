Ext.define('Iphoenix.view.ventas.ClientesTab',{
	extend:'Ext.panel.Panel',
	alias:'widget.ClientesTab',
	id:'ClientesTab',
	initComponent:function(){
		Ext.apply(this,{
			title:'Clientes',
			iconCls:'clientes',
			closable:false,
			layout:'card',
			tbar: ['->',
 	               {
 	                  
 	                   text: 'Clientes',
 	                   iconCls:'clientes',
 	                   handler: function() {
 	                	   var cmp=Ext.getCmp('ClientesTab');
 				    		 cmp.getLayout().setActiveItem("Clientes");;
 	                   }
 	             
 	               },
 	               '-', 
 	               {
 	                   
 	                   text: 'Empresas para facturaci&oacute;n',
 	                  iconCls:'facturacion',
 	                   handler: function(btn) {
 	          
 	                	  
 	                	   var cmp=Ext.getCmp('ClientesTab');
 				    		 cmp.getLayout().setActiveItem("Empresas");
 	                   }
 	               }
 	           ],	 	     			      
			items: [
			        { xtype:'Clientes' },
			        { xtype:'Empresas'}
			    ]
			
		});
	    this.callParent(arguments);
	}
});