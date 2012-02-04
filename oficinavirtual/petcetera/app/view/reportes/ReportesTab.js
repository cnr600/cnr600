Ext.define('Iphoenix.view.reportes.ReportesTab',{
	extend:'Ext.panel.Panel',
	alias:'widget.ReportesTab',
	id:'ReportesTab',
	initComponent:function(){
	
		var states = Ext.create('Ext.data.Store', {
		    fields: ['id', 'nombre'],
		    data : [
		        {"id":"ventas", "nombre":"Reporte de ventas"},
		        {"id":"usuarios", "nombre":"Reporte de usuarios"},
		      //  {"id":"clientes", "nombre":"Reporte atenci&oacute;n a clientes"},
		      //  {"id":"financiero", "nombre":"Reporte financiero"},
		        {"id":"caja", "nombre":"Reporte de caja"},
		        {"id":"inventario", "nombre":"Reporte de inventario"},
		        {"id":"provedores", "nombre":"Reporte de provedores"},
		        {"id":"clientes", "nombre":"Reporte de clientes"},
		        {"id":"talento", "nombre":"Reporte de detección de talento"}
		       
		    ]
		});


		Ext.apply(this,{
			title:'Reportes',
			 iconCls: 'reportes',
			closable:true,
			layout:'card',
			tbar: ['->',
 	              
 	               {
 	                 xtype:'combo', 
 	                 width:350,
 	                 labelWidth:120,
				 fieldLabel: 'Selecciona un reporte',
				    store: states,
				    queryMode: 'local',
				    displayField: 'nombre',
				    valueField: 'id',
 	                 listeners:{
 	                	 change:function(a,value) {
 	           	          
 	 	                	 if(value=="ventas"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 Ext.getStore('reportes.VentasPorProductoStore').load();
 	 	                		 cmp.getLayout().setActiveItem("ReportesVentasTab");
 	 				    		 
 	 	                	 }
 	 	                	 if(value=="caja"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 cmp.getLayout().setActiveItem("ReportesCajaTab");
 	 	                	 }
 	 	                	 if(value=="inventario"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 cmp.getLayout().setActiveItem("ReportesInventarioTab");
 	 	                	 }
 	 	                	 if(value=="provedores"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 cmp.getLayout().setActiveItem("ReportesProvedoresTab");
 	 	                	 }
 	 	                	 if(value=="talento"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 cmp.getLayout().setActiveItem("ReportesTalentoTab");
 	 	                	 }
 	 	                	 if(value=="usuarios"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 cmp.getLayout().setActiveItem("ReportesUsuariosTab");
 	 	                	 }
 	 	                	 if(value=="clientes"){
 	 	                		 var cmp=Ext.getCmp('ReportesTab');
 	 				    		 cmp.getLayout().setActiveItem("ReportesClientesTab");
 	 	                	 }
 	 	                	  
 	 	                   }
 	                 } 
 	               }
 	           ],	 	     			      
			items: [
			        { 
			        	//html:'Reportes'
			        	
			        },
			        {
			        	xtype:'ReportesCajaTab'
			        },
			        {
			       xtype:'ReportesClientesTab'
			        },
			        {
			        	xtype:'ReportesInventarioTab'
			        },
			        {
			     	xtype:'ReportesProvedoresTab'
			        },
			        {
			      	xtype:'ReportesTalentoTab'
			        },
			        {
			        	xtype:'ReportesUsuariosTab'
			        },
			        {
			        	xtype:'ReportesVentasTab'
			        }
			    ]
			
		});
		this.callParent(arguments);
	}
});