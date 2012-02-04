Ext.require([
    'Ext.window.*',
    'Ext.tip.*',
    'Ext.layout.container.Border'
]);
Ext.onReady(function(){
    Login=function(button){
    	console.log('Login');
    	 var win= button.up('window');
         var form = win.down('form');
         var loginForm=form.getForm();
         if (loginForm.isValid()) {
        		loginForm.submit({
        			url: 'petcetera/resources/data/login/Login.php',
        			waitTitle:'Autentific\u00e1ndose',waitMsg:'Espere un momento...',
        			success: function(f,a){
        				window.location.href="petcetera/";
        				
        				
        			},
        			failure: function(form,action){
        				if(action.failureType == 'server'){ 
                            obj = Ext.JSON.decode(action.response.responseText); 
                            Ext.Msg.alert('Atenci&oacuten!', obj.errors.reason); 
                        }else{ 
                            Ext.Msg.alert('Atenci&oacuten!', 'No es posible contactar al servidor de autenticaci&oacuten : ' + action.response.responseText); 
                        }
        			}
        		});
		    	
			}else{
				Ext.Msg.alert('Atenci&oacuten', 'Favor de llenar todos los campos.');
			}
    
    };
    RegenerarContrasena=function(button){
    	Ext.create('Ext.window.Window', {
    	    title: 'Regenerar Contrase\u00F1a',
    	    height: 150,
    	    width: 300,
    	    layout: 'fit',
    	    items: {  // Let's put an empty grid in just to illustrate fit layout
    	        html:'Favor de enviarnos un correo electr&oacute;nico a la direcci&oacute;n oficinavirtual@catalogopetcetera.com escribi&eacute;ndonos su nombre de usuario. <br/><br/>Gracias. '
    	    }
    	}).show();
    };
	var loginForm = Ext.create('Ext.form.Panel',{
    	labelWidth: 75,
        bodyCssClass: 'x-panel-mc',
        bodyStyle: 'padding: 30px 0 30px 30px;',
        width: 300,
    	bbar : [ {
			text : '<b>\u00BFOlvid\u00F3 su contrase\u00F1a?</b>',
			id : 'regenera-contrasena',
			handler: this.RegenerarContrasena
		}, '->', {
			text : '<b>Entrar!</b>',
			handler: this.Login
		} ],
        items: [{
			xtype: 'textfield',
			fieldLabel: 'Usuario',
			name: 'loginUsername',
			allowBlank:false,
			
			blankText: 'Favor de llenar este campo'
        
        },{
        	xtype: 'textfield',
            fieldLabel: 'Contrase&ntilde;a',
            name: 'loginPassword',
            inputType:'password',
            disabled:false,
            allowBlank:false,
            blankText: 'El password es requerido'
        }]
    });

	var win=Ext.create('widget.window', {
		width : 312,
		align : 'center',
		title : 'Inicio de sesi&oacuten',
		iconCls : 'logoEmexica16 ',
		closable : false,
		draggable : true,
		resizable: false,
	
		items:[loginForm]
 
    });
    win.show();
   
});
