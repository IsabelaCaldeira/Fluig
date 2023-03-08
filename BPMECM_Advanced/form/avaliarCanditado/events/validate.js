function validateForm(form){
    var mensagem = "";

    if(form.getValue("nome") == "" || "renda" == null){
        mensagem += "Qual a nome, queride?";
    }
    if(form.getValue("email") == "" || "renda" == null){
        mensagem += "Acho que você esqueceu do email";
    }
    if(form.getValue("celular") == "" || "renda" == null){
        mensagem += "Acho que você esqueceu do email";
    }
    if(form.getValue("cargo") == "" || "renda" == null){
        mensagem += "Acho que você esqueceu do email";
    }
    if(form.getValue("linkedin") == "" || "renda" == null){
        mensagem += "Acho que você esqueceu do email";
    }
    if(mensagem != ""){
        throw mensagem;
    }
}