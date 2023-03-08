function validateForm(form){
    var mensagem = "";

    if(form.getValue("nome") == "" || "renda" == null){
        mensagem += "Qual a nome, queride?";
    }
    if(form.getValue("email") == "" || "renda" == null){
        mensagem += "Acho que você esqueceu do email";
    }
    if(form.getValue("celular") == "" || "renda" == null){
        mensagem += "E seu número de telefone que você esqueceu de me passar?";
    }
    if(form.getValue("cargo") == "" || "renda" == null){
        mensagem += "Conta para mim o que você quer ser";
    }
    if(form.getValue("linkedin") == "" || "renda" == null){
        mensagem += "Não tem como eu te achar sem seu linkedin, meu ser de luz";
    }
    if(mensagem != ""){
        throw mensagem;
    }
}