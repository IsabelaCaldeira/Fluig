function validateForm(form){
    var mensagem = " ";

    if(form.getValue("renda") == "" || "renda" == null){
        mensagem += "Qual a renda, queride?";
    }

    if(mensagem != ""){
        throw mensagem;
    }
}