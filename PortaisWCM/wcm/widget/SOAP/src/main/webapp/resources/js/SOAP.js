var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },

    bindings: {
        local: {
            'create': ['click_cria_pasta']
        }
    },

    cria_pasta: function () {
        
        var nome = $('#Desc_pasta_'+this.instanceId).val();

        $.ajax({
            url: '/SOAP/resources/js/xml/ECMFolderService_createSimplesFolder.xml',
            async : false,
            type: 'GET',
            datatype: 'xml',
            success: function(xml){
                _xml = $(xml)
            }
        })

        xml.find("companyID").text(WCMAPI.tenantCode);
        xml.find("username").text("academy.wcm");
        xml.find("password").text("academy.wcm");
        xml.find("parentDocumentId").text("2");
        xml.find("publisherId").text("academy.wcm");
        xml.find("documentDescription").text(nome);
        
        WCMAPI.Create({
            url: "/webdesk/ECMFolderService?wsdl",
            contentType : "text/xml",
            dataType: "xml",
            data: _xml[0],
            success: function(data){
                console.log(data);
                FLUIGC.toast({
                    title: 'Aviso',
                    message: 'Pasta Criada',
                    type: 'success'
                })
            }
        })


    }
});