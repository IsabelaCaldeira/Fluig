var Graphic = SuperWidget.extend({
    message: null,

    init: function () {

        var data = {
            labels: ["Janeiro", "Fevereiro", "Maio", "Abril", "Maio", "Junho"],
            datasets:[
                {
                    label: "A new dataset",
                    fillColor: 'rgba(220, 220, 220,0.5)',
                    strokeColor: 'rgba(220,220,220,0.8)',
                    highlightFill: 'rgba(220,220,220,0.75)',
                    highlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "Another new dataset hihi",
                    fillColor: 'rgba(151, 187, 205,0.5)',
                    strokeColor: 'rgba(151, 187, 205,0.8)',
                    highlightFill: 'rgba(151, 187, 205,0.75)',
                    highlightStroke: 'rgba(151, 187, 205,1)',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
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