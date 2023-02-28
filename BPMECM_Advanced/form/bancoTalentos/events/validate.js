function validateForm(form){

    var mensagem = "";

    if(form.getValue("nome") == ""){
        mensagem += "Você não me contou o seu nome!!!";
    }
    if(form.getValue("celular") == ""){
        mensagem += "Como você espera que eu entre em contato, gatinhe?"
    }
    if(form.getValue("email") == ""){
        mensagem += "Eu ainda preciso do seu email!!"
    }
    if(form.getValue("linkedin") == ""){
        mensagem += "Como você espera que eu te stalkei sem o seu linkedin?"
    }

    if(mensagem != ""){
        throw mensagem;
    }
}