Ext.application({
	name:'Iphoenix',
	autoCreateViewport:true,
	controllers:['Controller'],
	launch:function(){
		  setTimeout(function(){
			    Ext.get('loading').remove();
			    Ext.get('loading-mask').fadeOut({remove:true});
			  }, 250);
	}
});
