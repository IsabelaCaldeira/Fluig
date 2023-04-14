var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        //code 
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage'],
            'show-click' : ['mouseover_btnOver', 'click_btn1'],
            'show-dblclick' : ['dblclick_btn2'],
            'show-keypress' : ['keypress_btn3'],
            'show-mouseover' : ['mouseover_btn4'],
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    },

    btn1:function(){
        $("#text1").css("background-Color", "blue");
    },

    btn2:function(){
        $("#text2").css("background-Color", "green");
    },

    btn3:function(){
        $("#text3").css("background-Color", "yellow");
    },

    btn1:function(){
        $("#text4").css("background-Color", "red");
    },

    btnOver:function(){
        $("#text1").css("background-Color", "red");
    }
});