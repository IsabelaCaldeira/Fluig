function validateForm(form){

    var mensagem = "";

    if(form.getValue("moeda") == "" || ("moeda") == null){
        mensagem += "Qual a moeda para eu coloca no sistema, queride?";
    }

    if(form.getValue("simbolo") == "") {
        mensagem += "Eu ainda preciso saber o simbolo necessario";
    }
    if(mensagem != ""){
        throw mensagem;
    }

}