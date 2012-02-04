Ext.define('Iphoenix.view.reportes.Report1',{
	extend:'Ext.panel.Panel',
	alias:'widget.VentasPorTipo',
	id:'VentasPorTipo',
	initComponent:function(){
	

	    var donut = false;


		Ext.apply(this,{
			title:'Ventas por tipo',
			iconCls:'reportes',
		        layout: 'fit',
		        tbar: [{
		            text: 'Cargar informacion',
		            handler: function() {
		               Ext.getStore('reportes.Report1Store').load();
		            }
		        },{
		            enableToggle: true,
		            pressed: false,
		            text: 'Forma de dona',
		            toggleHandler: function(btn, pressed) {
		                var chart = Ext.getCmp('chartCmp2');
		                chart.series.first().donut = pressed ? 35 : false;
		                chart.refresh();
		            }
		        }],
		        items: {
		            xtype: 'chart',
		            id: 'chartCmp2',
		            animate: true,
		            store: 'reportes.Report1Store',
		            shadow: true,
		            legend: {
		                position: 'right'
		            },
		            insetPadding: 60,
		            theme: 'Base:gradients',
		            series: [{
		                type: 'pie',
		                field: 'numpedidos',
		                showInLegend: true,
		                donut: donut,
		                tips: {
		                  trackMouse: false,
		                  width: 140,
		                  height: 100,
		                  renderer: function(storeItem, item) {
		                 
		                 //   this.setTitle(storeItem.get('tipopedido') + ': ' + Math.round(storeItem.get('total') / total * 100) + '%');
		                   this.setTitle(storeItem.get('nombre')+":<br/>Pedidos: "+storeItem.get('numpedidos')+"<br/> Productos: "+storeItem.get('cantidad')+"<br/>Total: $"+storeItem.get('total'));
		                  }
		                },
		                highlight: {
		                  segment: {
		                    margin: 20
		                  }
		                },
		                label: {
		                    field: 'nombre',
		                    display: 'rotate',
		                    contrast: true,
		                    font: '18px Arial'
		                }
		            }]
		        }
		
			
		});
		this.callParent(arguments);
	}
});