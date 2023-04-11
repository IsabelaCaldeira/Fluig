var xml;

$("#avaliarCandidato").click(function(){
    $.ajax({
        async: false,
        type: 'GET',
        dataType: 'xml',
        url: "xml/ECMWorkflowEngineService.xml",
        sucess: function(ret){
            console.log(ret);
            xml = $(ret);
        }
    });
    
    xml.find("[name=nome]").text($("nome").val());
    xml.find("[name=email]").text($("email").val());
    xml.find("[name=celular]").text($("celular").val());
    xml.find("[name=cargo]").text($("cargo").val());
    xml.find("[name=linkedin]").text($("linkedin").val());
    
    parent.WCMAPI.Create({
        url: "/webdesk/ECMWorkflowEngineService?wsdl",
        contentType: "text/xml",
        dataType: "xml",
        data: xml[0],
        sucess: function(data){
            console.log("Processo Iniciado");
        }
    });
});

