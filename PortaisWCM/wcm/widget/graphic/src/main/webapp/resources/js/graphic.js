var Graphic = SuperWidget.extend({
    message: null,

    init: function () {

        var ds = DatasetFactory.getDataset("ds_graficos", null, null,  null)

        var dados = [];

        for (x = 0; x < ds.values.lenght; x++){
            dados[x] = ds.values[x].Valor;
        }

        var data = {
            labels: ["Ferro de Passar", "Fogão", "Guarda-Roupa", "Máquina de Lavar", "Refrigerador"],
            datasets:[
                {
                    label: "A new dataset",
                    fillColor: 'rgba(220, 220, 220,0.5)',
                    strokeColor: 'rgba(220,220,220,0.8)',
                    highlightFill: 'rgba(220,220,220,0.75)',
                    highlightStroke: 'rgba(220,220,220,1)',
                    data: dados,
                },
            ]
        }
        
        var chart = FLUIGC.chart('#MY_SELECTOR',{
            id: 'set_an_if_for_chart',
            width: '700',
            height: '200',
        });

        var barChart = chart.bar(data, "");

        
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    }
});