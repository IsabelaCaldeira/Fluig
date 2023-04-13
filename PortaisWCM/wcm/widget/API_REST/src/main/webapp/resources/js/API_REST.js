var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        var _this = this;
        var _Jsonret = null; 
        
        $.ajax({
        	async: false,
        	type: "GET",
        	dataType: "json",
        	url: '/api/public/ecm/document/listDocument/0',
        	success: function(retorno){
        		_Jsonret = retorno;
        		
        		$.each(_Jsonret.content, function(k,v){
        			$("#lista_diretorios_" +_this.instanceId).append("<option value="+ v.id +">"+v.description + "</option>");
        		});
        		
        	}
        	
        });
       
    	
    },

    bindings: {
        local: {
            'carregaDiretorio': ['change_fnCarrega']
        }
    },

    
    fnCarrega: function(){
    	var _this = this;
    	var iddiretorio = $("#lista_diretorios_"+ _this.instanceId).val();
    	
    	var _Jsonret = null; 
    	
    	$.ajax({
        	async: false,
        	type: "GET",
        	dataType: "json",
        	url: '/api/public/ecm/document/listDocument/'+ iddiretorio,
        	success: function(retorno){
        		_Jsonret = retorno;
        	
        	$(".diretorios").remove();	
        		
        	var registros = _Jsonret.content.length; 
        	$("#bagde_diretorios_" +_this.instanceId).text(registros);
        	
        	$.each(_Jsonret.content, function(k,v){
    			$("#relacionar_diretorios_" +_this.instanceId).append('<li class="list-group-item diretorios">' + v.description +'</li>');
        		});
    		
        	}
		});
	}
})
        	