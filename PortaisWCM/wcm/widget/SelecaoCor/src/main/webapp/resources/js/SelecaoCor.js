var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {

        if(this.isEditMode){
            
            var settings = { 
                changeDelay: 200,
                control: 'wheel',
                defaultValue: '#58595b',
                inline: false,
                letterCase: 'lowercase',
                opacity: true,
                position: 'bottom left',
                customColorNames: {
                    'mycustomcolor' : '#123456'
                }
            }

            var myColorPicker = FLUIGC.colorpicker('#colorpicker-example-generic', settings);
        }
        else{
        }
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'save': ['click_save']
        },
        global: {}
    },
 
    save: function() {

        var args = {};
        args.cor = $("colorpicker-example-generic", this.DOM).val();

        var result = WCMSpaceAPI.PAgeSErvice.UPDATEPREFERENCES({async:false}, this.instanceId, args);
    
        if(result){
            WCMC.messageInfo(result.message);
        } 
        else{
            WCMC.messageError("Erro");
        }
    }

});

