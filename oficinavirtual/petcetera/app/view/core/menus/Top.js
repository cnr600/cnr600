Ext.define('Iphoenix.view.core.menus.Top',{
	extend: 'Ext.toolbar.Toolbar',
	alias:'widget.TopMenu',
	initComponent:function(){

		Ext.apply(this,{
			height:40,
			layout: {
		         overflowHandler: 'Menu'
		     },
		     items: [{
		         
		         text: 'eMexica 2.0',
		         iconCls: 'logoEmexica16',
		         handler:function(){
		        	 var window=Ext.getCmp('About');
		        	 if(!window){
		        		var window=Ext.create('Iphoenix.view.core.About');
		        		 window.show();
		        	 }else{
		        		 window.show();
		        	 }
		        	
		        	
		         }
		   
		     },'->',{
		         xtype:'button',
		         id:'user',
		         iconCls:'perfil',
		    	    listeners: {
		    	            render: function() {
		    	        	Ext.Ajax.request({
		    	    		    url: 'resources/data/login/User.info.php',
		    	    		    params: {
		    	    		        id: 1
		    	    		    },
		    	    		    success: function(response){
		    	    		        text = Ext.JSON.decode(response.responseText);
		    	    		        Ext.getCmp('user').setText(text.DATA.name);
		    	    		        
		    	    		    }
		    	    		});
		    	           
		    	        }
		    	    },
		    	    handler:function(){
		    	    	var content=Ext.getCmp('VendedorInfo');
			        	 if(!content){
				        	 var content=Ext.getCmp('content-panel');
				        	 var tab=Ext.create('Iphoenix.view.vendedor.VendedorInfo');
				        	 content.add(tab);
				        	 content.setActiveTab('VendedorInfo');
			        		
			        	 }else{
			        		 var contentPanel=Ext.getCmp('content-panel');
			        		 contentPanel.setActiveTab('VendedorInfo');
			        	 }}
		         
		        
		     },'->',{
		         text: 'Inicio',
		         iconCls: 'home',
		         handler: function () {
	        		 var content=Ext.getCmp('Inicio');
		        	 if(!content){
			        	 var content=Ext.getCmp('content-panel');
			        	
			        	 content.setActiveTab('Comunicacion');
		        		
		        	 }else{
		        		 var contentPanel=Ext.getCmp('content-panel');
		        		 contentPanel.setActiveTab('Inicio');
		        	 }}
		       
		     },'-',{
		         text: 'Crear pedido',
		         iconCls: 'add',
		         disabled:false,
		         handler:function(){
		        	 Ext.Ajax.request({
		        		    url: 'resources/data/pedidos/PedidosArticulos.php?info=inicia',
		        		   
		        		    success: function(response){
		        		        var text = response.responseText;
		        		        console.log(text);
		        		    }
		        		});
		        	 Ext.example.msg("Crear pedido", 'Iniciando... ');
		        	 Ext.create('Ext.window.Window', {
		        		    id:'nuevopedidowindow',
		        		    title: 'Crear un nuevo pedido',
		        		    iconCls: 'pedidos',
		        		    modal:true,
		        		    height: 500,
		        		    width: 770,
		        		    layout: 'fit',
		        		    items: {  
		        		        xtype: 'NuevoPedido'
		        		    },
		        		    listeners: {
		        		        destroy: {
		        		       
		        		            fn: function(){  Ext.getStore("pedidos.NuevoPedidoStore").removeAll(); }
		        		        }
		        		    }
		        		}).show();
		        	
		         }

		       
		     },'-',{
		         text: 'Salir',
		         iconCls: 'salir16',
		         handler:function(){
		        		Ext.Ajax.request({
		        		    url: 'resources/data/login/EndSession.php',
		        		    waitTitle:'Cerrando session',waitMsg:'Espere un momento...',
		        		    success: function(response){
		        		    	Ext.Msg.alert('Aviso', 'Su session ha sido cerrada.');
		        		    	window.location.href="../";
		        		    }
		        		});
		         }
		       
		     }]
		});
		this.callParent(arguments);
	}
		});


