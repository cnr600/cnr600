Ext.define('Iphoenix.view.catalogo.Catalogo',{
	extend:'Ext.form.Panel',
	alias:'widget.Catalogo',
	id:'Catalogo',
    closeAction: 'hide',
    iconCls:'catalogo',
    layout: 'border',
    border: false,
    bodyBorder: false,
    title:'Cat&aacute;logo',
	    initComponent: function() {
	        this.items = [
	            {
	                xtype: 'panel',
	                region: 'center',
	                autoScroll: true,
	                
	                items: {
	                    xtype: 'iconbrowser',
	                    id: 'img-chooser-view',
	                    listeners: {
	                        scope: this,
	                        selectionchange: this.onIconSelect,
	                        itemdblclick: this.fireImageSelected
	                    }
	                },
	                
	                tbar: [{
                        xtype: 'textfield',
                        name : 'filter2',
                        fieldLabel: 'L&iacute;nea de producto',
                        labelAlign: 'right',
                        labelWidth: 120,
                        listeners: {
                            scope : this,
                            buffer: 50,
                            change: this.filter2
                        }
                    },
	                    {
	                        xtype: 'textfield',
	                        name : 'filter',
	                        fieldLabel: 'Nombre del producto',
	                        labelAlign: 'right',
	                        labelWidth: 120,
	                        listeners: {
	                            scope : this,
	                            buffer: 50,
	                            change: this.filter
	                        }
	                    },
	                    ' ',
	                    {
	                        xtype: 'combo',
	                        fieldLabel: 'Ordenar por',
	                        labelAlign: 'right',
	                        labelWidth: 100,
	                        valueField: 'field',
	                        displayField: 'label',
	                        value: '',
	                        editable: false,
	                        store: Ext.create('Ext.data.Store', {
	                            fields: ['field', 'label'],
	                            sorters: 'type',
	                            proxy : {
	                                type: 'memory',
	                                data  : [{label: 'Nombre', field: 'nombre'}, {label: 'Linea', field: 'clasificacion'}]
	                            }
	                        }),
	                        listeners: {
	                            scope : this,
	                            select: this.sort
	                        }
	                    }
	                ]
	            },
	            {
	                xtype: 'infopanel',
	                region: 'east',
	                split: true
	            }
	        ];
	        

	        
	        this.callParent(arguments);
	        
	        /**
	         * Specifies a new event that this component will fire when the user selects an item. The event is fired by the
	         * fireImageSelected function below. Other components can listen to this event and take action when it is fired
	         */
	        this.addEvents(
	            /**
	             * @event selected
	             * Fired whenever the user selects an image by double clicked it or clicking the window's OK button
	             * @param {Ext.data.Model} image The image that was selected
	             */
	            'selected'
	        );
	    },
	    
	    /**
	     * @private
	     * Called whenever the user types in the Filter textfield. Filters the DataView's store
	     */
	    filter: function(field, newValue) {
	        var store = this.down('iconbrowser').store,
	            dataview = this.down('dataview');
	        
	        store.suspendEvents();
	        store.clearFilter();
	        dataview.getSelectionModel().clearSelections();
	        store.resumeEvents();
	        store.filter({
	            property: 'nombre',
	            anyMatch: true,
	            value   : newValue
	        });
	    }, filter2: function(field, newValue) {
	        var store = this.down('iconbrowser').store,
            dataview = this.down('dataview');
        
        store.suspendEvents();
        store.clearFilter();
        dataview.getSelectionModel().clearSelections();
        store.resumeEvents();
        store.filter({
            property: 'clasificacion',
            anyMatch: true,
            value   : newValue
        });
    },
	    
	    /**
	     * @private
	     * Called whenever the user changes the sort field using the top toolbar's combobox
	     */
	    sort: function() {
	        var field = this.down('combobox').getValue();
	        
	        this.down('dataview').store.sort(field);
	    },
	    
	    /**
	     * Called whenever the user clicks on an item in the DataView. This tells the info panel in the east region to
	     * display the details of the image that was clicked on
	     */
	    onIconSelect: function(dataview, selections) {
	        var selected = selections[0];
	        
	        if (selected) {
	            this.down('infopanel').loadRecord(selected);
	        }
	    },
	    
	    /**
	     * Fires the 'selected' event, informing other components that an image has been selected
	     */
	    fireImageSelected: function() {
	        var selectedImage = this.down('iconbrowser').selModel.getSelection()[0];
	        
	        if (selectedImage) {
	            this.fireEvent('selected', selectedImage);
	            this.hide();
	        }
	    }
	});
