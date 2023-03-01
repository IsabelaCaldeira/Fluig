function validateForm(form){
    var mensagem = "";

    if(form.getValue("renda") == ""){
        mensagem += "Qual a renda, queride?";
    }

    if(mensagem != ""){
        throw mensagem;
    }
}