Ext.define('Iphoenix.view.reportes.ventas.VentasTab',{
	extend:'Ext.panel.Panel',
	alias:'widget.ReportesVentasTab',
	id:'ReportesVentasTab',
	initComponent:function(){
		


		Ext.apply(this,{
			layout:'card',
			tbar: ['->',
 	              
 	               {
 	                   
 	                   text: 'Ventas por producto',
 	                   handler: function(btn) {
 	          
 	                	 
 	                	   var cmp=Ext.getCmp('ReportesVentasTab');
 				    		 cmp.getLayout().setActiveItem("ReporteVentasPorProducto");
 	                   }
 	               },
 	               '-', 
 	               {
 	                   
 	                   text: 'Ventas mensuales',
 	                   handler: function(btn) {
 	                	  Ext.getStore('reportes.VentasPorMesStore').load();
 	                	   var cmp=Ext.getCmp('ReportesVentasTab');
 				    		 cmp.getLayout().setActiveItem("ReporteVentasPorMes");
 				    		
 	                   }},
 	 	               '-', 
 	 	               {
 	 	                   
 	 	                   text: 'Ventas por tipo',
 	 	                   handler: function(btn) {
 	 	                	  Ext.getStore('reportes.Report1Store').load();
 	 	                	   var cmp=Ext.getCmp('ReportesVentasTab');
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