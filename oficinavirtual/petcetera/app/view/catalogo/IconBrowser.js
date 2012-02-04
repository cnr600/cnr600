Ext.define('Iphoenix.view.catalogo.IconBrowser', {
    extend: 'Ext.view.View',
    alias: 'widget.iconbrowser',
    
    uses: 'Ext.data.Store',
    
	singleSelect: true,
    overItemCls: 'x-view-over',
    itemSelector: 'div.thumb-wrap',
    tpl: [
        // '<div class="details">',
            '<tpl for=".">',
                '<div class="thumb-wrap">',
                    '<div class="thumb">',
                    (!Ext.isIE6? '<img width=74px height=74px src="{imagenurl}" />' : 
                    '<div style="width:74px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'{nombre}\')"></div>'),
                    
                    '<span>{preciovendedor:usMoney}</span>',
                    '<strong><br/>{nombre}<br/></strong>',
                    '<strong><br/>{clasificacion}<br/></strong>',
                    '</div>',
              
                '</div>',
            '</tpl>'
        // '</div>'
    ],
    
    initComponent: function() {
        this.store ='catalogo.ProductosStore';
        
        this.callParent(arguments);
        this.store.sort();
    }
});