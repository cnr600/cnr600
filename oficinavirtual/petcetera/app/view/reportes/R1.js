Ext.define('Iphoenix.view.reportes.R1',{
	extend:'Ext.panel.Panel',
	alias:'widget.R1',
	id:'R1',
	initComponent:function(){


		Ext.apply(this,{
			title:'Reportes',
			iconCls:'reportes',
			layout:'card',
			tbar: ['->',
 	              
 	               {
 	                   
 	                   text: 'Ventas por producto',
 	                   handler: function(btn) {
 	          
 	                	 
 	                	   var cmp=Ext.getCmp('R1');
 				    		 cmp.getLayout().setActiveItem("ReporteVentasPorProducto");
 	                   }
 	               },
 	               '-', 
 	               {
 	                   
 	                   text: 'Ventas mensuales',
 	                   handler: function(btn) {
 	                	  Ext.getStore('reportes.VentasPorMesStore').load();
 	                	   var cmp=Ext.getCmp('R1');
 				    		 cmp.getLayout().setActiveItem("ReporteVentasPorMes");
 				    		
 	                   }},
 	 	               '-', 
 	 	               {
 	 	                   
 	 	                   text: 'Ventas por tipo',
 	 	                   handler: function(btn) {
 	 	                	  Ext.getStore('reportes.Report1Store').load();
 	 	                	   var cmp=Ext.getCmp('R1');
 	 				    		 cmp.getLayout().setActiveItem("VentasPorTipo");
 	 				    		
 	 	                   }
 	               }
 	           ],	 	     			      
			items: [
			        { 
			        	xtype:'ReporteVentasPorProducto'
			        	
			        },
			        { 
			        	xtype:'ReporteVentasPorMes'
			        	
			        },
			        { 
			        	xtype:'VentasPorTipo'
			        	
			        }
			    ]
			
		});
		this.callParent(arguments);
	}
});