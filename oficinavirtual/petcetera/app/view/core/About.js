Ext.define('Iphoenix.view.core.About',{
	extend:'Ext.window.Window',
	alias:'widget.About',
	id:'About',
	initComponent:function(){
		Ext.apply(this,{
			title:'eMexica 2.0',
			iconCls: 'logoEmexica16',
			width:300,
			height:200,
			html:'<div class="About" ><img src="resources/images/logos/emexicabyiphoenix.png" width="284" height="161" /></div>',
		});
		this.callParent(arguments);
	}	
})