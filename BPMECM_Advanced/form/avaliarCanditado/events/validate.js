function validateForm(form){
    var mensagem = "";

    if(form.getValue("nome") == "" || ("renda") == null){
        mensagem += "Qual a nome, queride?";
    }
    if(form.getValue("email") == "" || ("email") == null){
        mensagem += "Acho que você esqueceu do email";
    }
    if(form.getValue("celular") == "" || ("celular") == null){
        mensagem += "E seu número de telefone que você esqueceu de me passar?";
    }
    if(form.getValue("cargo") == "" || ("cargo") == null){
        mensagem += "Conta para mim o que você quer ser";
    }
    if(form.getValue("linkedin") == "" || ("linkedin") == null){
        mensagem += "Não tem como eu te achar sem seu linkedin, meu ser de luz";
    }
    if(mensagem != ""){
        throw mensagem;
    }
}