Ext.define('Iphoenix.view.comunicacion.Comunicacion',{
	extend:'Ext.panel.Panel',
	alias:'widget.Comunicacion',
	id:'Comunicacion',
	initComponent:function(){
		Ext.apply(this,{
			title:'Inicio',
			iconCls:'home',
			 html:'<iframe src="resources/html/inicio/inicio.php" width="100%" height="100%" frameborder="0"><p>Your browser does not support iframes.</p></iframe>'
			
		});
		this.callParent(arguments);
	}
});