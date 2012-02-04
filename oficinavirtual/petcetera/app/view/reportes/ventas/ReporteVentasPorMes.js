Ext.define('Iphoenix.view.reportes.ventas.ReporteVentasPorMes',{
	extend:'Ext.form.Panel',
	alias:'widget.ReporteVentasPorMes',
	id:'ReporteVentasPorMes',
	initComponent:function(){
		 function perc(v) {
		        return v + '%';
		    }

		    var bd = Ext.getBody(),
		        form = false,
		        rec = false,
		        selectedStoreItem = false,
		        //performs the highlight of an item in the bar series
		        selectItem = function(storeItem) {
		            var name = storeItem.get('id'),
		                series = barChart.series.get(0),
		                i, items, l;
		            
		            series.highlight = true;
		            series.unHighlightItem();
		            series.cleanHighlights();
		            for (i = 0, items = series.items, l = items.length; i < l; i++) {
		                if (name == items[i].storeItem.get('id')) {
		                    selectedStoreItem = items[i].storeItem;
		                    series.highlightItem(items[i]);
		                    break;
		                }
		            }
		            series.highlight = false;
		        },
		        //updates a record modified via the form
		        updateRecord = function(rec) {
		         
		            selectItem(rec);
		        },
		        createListeners = function() {
		            return {
		                // buffer so we don't refire while the user is still typing
		                buffer: 200,
		                change: function(field, newValue, oldValue, listener) {
		                    form.updateRecord(rec);
		                    updateRecord(rec);
		                }
		            };
		        };
		
	
		    
		 
		    //create a grid that will list the dataset items.
		    var gridPanel = Ext.create('Ext.grid.Panel', {
		        id: 'VentasPorMes',
		        flex: 0.60,
		        store: 'reportes.VentasPorMesStore',
		        title:'Informaci&oacute;',

		        columns: [
		            {
		                id       :'company',
		                text   : 'Id',
		                width:100,
		                sortable : true,
		                dataIndex: 'id'
		            },
		            {
		                text   : 'Mes',
		                flex:1,
		                sortable : true,
		                dataIndex: 'mes',
		                align: 'right'
		            },
		            {
		                text   : 'Cantidad ',
		                width    : 75,
		                sortable : true,
		                align: 'right',
		                dataIndex: 'cantidad'
		            },
		            {
		                text   : 'Total',
		                width    : 75,
		                sortable : true,
		                align: 'right',
		                dataIndex: 'total',
		                renderer:function(value){
		                	return "$ "+value;
		                }
		            }
		        ],

		        listeners: {
		            selectionchange: function(model, records) {
		                var json, name, i, l, items, series, fields;
		                if (records[0]) {
		                    rec = records[0];
		                    form = form || this.up('form').getForm();
		                    fields = form.getFields();
		                    // prevent change events from firing
		                    fields.each(function(field){
		                        field.suspendEvents();
		                    });
		                    form.loadRecord(rec);
		                    updateRecord(rec);
		                    fields.each(function(field){
		                        field.resumeEvents();
		                    });
		                }
		            }
		        }
		    });

		    //create a bar series to be at the top of the panel.
		    var barChart = Ext.create('Ext.chart.Chart', {
		        flex: 1,
		        shadow: true,
		        animate: true,
		        store: 'reportes.VentasPorMesStore',
		        axes: [{
		            type: 'Numeric',
		            position: 'left',
		            fields: ['total'],
		            minimum: 0,
		            hidden: true
		        }/*, {
		            type: 'Category',
		            position: 'bottom',
		            fields: ['mes'],
		            label: {
		                renderer: function(v) {
		                    return Ext.String.ellipsis(v, 15, false);
		                },
		                font: '9px Arial',
		                rotate: {
		                    degrees: 270
		                }
		            }
		        }*/],
		        series: [{
		            type: 'column',
		            axis: 'left',
		            highlight: true,
		            style: {
		                fill: '#456d9f'
		            },
		            highlightCfg: {
		                fill: '#a2b5ca'
		            },
		            label: {
		                contrast: true,
		                display: 'insideEnd',
		                field: 'total',
		                color: '#000',
		                orientation: 'vertical',
		                'text-anchor': 'middle',
		                renderer:function(value){
		                	return "$ "+value;
		                }
		            },
		            listeners: {
		                'itemmouseup': function(item) {
		                     var series = barChart.series.get(0),
		                         index = Ext.Array.indexOf(series.items, item),
		                         selectionModel = gridPanel.getSelectionModel();
		                     
		                     selectedStoreItem = item.storeItem;
		                     selectionModel.select(index);
		                }
		            },
		            xField: 'nombre',
		            yField: ['total']
		        }]        
		    });
		    
		    //disable highlighting by default.
		    barChart.series.get(0).highlight = false;
		    
		    //add listener to (re)select bar item after sorting or refreshing the dataset.
		    barChart.addListener('beforerefresh', (function() {
		        var timer = false;
		        return function() {
		            clearTimeout(timer);
		            if (selectedStoreItem) {
		                timer = setTimeout(function() {
		                    selectItem(selectedStoreItem);
		                }, 900);
		            }
		        };
		    })());
		    
	    

	    var gp = Ext.getCmp('VentasPorMes');
	    Ext.apply(this,{
	    	 title: 'Ventas por producto',
	         frame: true,
	         bodyPadding: 5,
	         width: 870,
	         height: 720,

	         fieldDefaults: {
	             labelAlign: 'left',
	             msgTarget: 'side'
	         },
	     
	         layout: {
	             type: 'vbox',
	             align: 'stretch'
	         },
	         
	         items: [
	             {
	                 height: 200,
	                 layout: 'fit',
	                 margin: '0 0 3 0',
	                 items: [barChart]
	             },
	             {
	             
	             layout: {type: 'hbox', align: 'stretch'},
	             flex: 3,
	             border: false,
	             bodyStyle: 'background-color: transparent',
	             
	             items: [gridPanel, {
	                 flex: 0.4,
	                 layout: {
	                     type: 'vbox',
	                     align:'stretch'
	                 },
	                 margin: '0 0 0 5',
	                 title:'Detalles del mes',
	                 items: [{
	                     margin: '5',
	                     xtype: 'fieldset',
	                     flex: 1,
	                  
	                     defaults: {
	                         width: 240,
	                         labelWidth: 90
	                     },
	                     defaultType: 'textfield',
	                     items: [{
	                         fieldLabel: 'Id',
	                         name: 'id',
	                         disabled: true
	                     },{
	                         fieldLabel: 'Mes',
	                         name: 'mes'
	                     },{
	                         fieldLabel: 'Cantidad',
	                         name: 'cantidad'
	                     },{
	                         fieldLabel: 'Total',
	                         name: 'total'
	                     }]
	                 }]
	             }]
	         }]
	    });
	    this.callParent(arguments);
	}
});