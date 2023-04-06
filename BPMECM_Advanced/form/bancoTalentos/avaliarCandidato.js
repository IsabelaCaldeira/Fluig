var xml;

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