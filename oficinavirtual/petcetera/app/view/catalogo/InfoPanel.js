Ext.define('Iphoenix.view.catalogo.InfoPanel', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.infopanel',
    id: 'img-detail-panel',

    width: 250,
    minWidth: 150,

    tpl: [
        '<div class="details">',
            '<tpl for=".">',
            (!Ext.isIE6? '<img src="{imagenurl}" />' : 
            '<div style="width:74px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'{imagenurl}\')"></div>'),
           
                    (!Ext.isIE6? '<img src="{modeloImg}" />' : 
                    '<div style="width:74px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'{imagenurl\')"></div>'),
                '<div class="details-info">',
                    '<b>Modelo: </b>',
                    '<span>{nombre} <br/></span>',
                    '<b>Precio: </b>',
                    '<span>${preciovendedor}<br/></span>',
                    '<b>Linea: </b>',
                    '<span>{clasificacion}<br/></span>',
                    '<b>Palabras clave: </b>',
                    '<span>{meta_keywords}<br/></span>',
                '</div>',
            '</tpl>',
        '</div>'
    ],

    /**
     * Loads a given image record into the panel. Animates the newly-updated panel in from the left over 250ms.
     */
    loadRecord: function(image) {
        this.body.hide();
        this.tpl.overwrite(this.body, image.data);
        this.body.slideIn('l', {
            duration: 250
        });
    }
});