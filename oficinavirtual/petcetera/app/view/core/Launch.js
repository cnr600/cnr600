Ext.define('Iphoenix.view.core.Launch',{
	extend:'Ext.panel.Panel',
	alias:'widget.Launch',
	id:'Launch',
	initComponent:function(){
		Ext.apply(this,{
			layout:'border',
			items : [
						{
							xtype : 'TopMenu',
							
							region : 'north'

						},
						

						{
							id : 'content-panel',
							region : 'center', 
							xtype : 'tabpanel',
							margins : '2 5 5 0',
							activeItem : 0,
							border : false,
							items : [
									{

										xtype:'Comunicacion'

									},{
										xtype:'ClientesTab'
											
									},{
										xtype:'Pedidos'
									},{
										xtype:'R1'
									},{
										xtype:'Catalogo'
									}
									]
						} ]
		});
		this.callParent(arguments);
	}
});