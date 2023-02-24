function validateForm(form){

    var mensagem = "";

    /*Dados Pessoas */
    if(form.getValue("nome") == ""){
        mensagem += "Você não me contou seu nome!!!";
    }
    if(form.getValue("email") ==""){
        mensagem += "Queride, seu email tá onde?";
    }
    if(form.getValue("celular") == ""){
        mensagem += "Gatinhe, preciso do seu número!";
    }
    if(form.getValue("dataNascimento") == ""){
        mensagem += "Eu realmente acho que idade não importa, mas preciso saber sua data de nascimento";
    }
    if(form.getValue("identidade") == ""){
        mensagem += "Os números da sua identidade para eu passar para minha numerologa, por favor?";
    }

    /*Responsáveis*/
    var responsaveis = form.getChildrenIndexes("responsaveisTabela");

    if(responsaveis.length == 0){
        mensagem += "Tá deixando correr solto o ponto?";
    }

    /*Ponto Comercial*/
    if(form.getValue("tipoPonto") ==""){
        mensagem += "Você não me contou qual é o tipo de ponto";
    }
    if(form.getValue("segunda") != "on" && form.getValue("terca") != "on" && form.getValue("quarta") != "on" && form.getValue("quinta") != "on" && form.getValue("sexta") != "on" && form.getValue("sabado") != "on" && form.getValue("domingo") != "on"){
        mensagem += "Não funciona nem um dia da semana ou você só não quer me contar?";
    }
    if(form.getValue("cep") == ""){
        mensagem += "Não tenhas medo de colocar seu endereço, o sistema quem pede!";
    }
    if(form.getValue("numero") == ""){
        mensagem += "Não quero nada incompleto. Cadê o número do ponto?";
    }

    /*Financeiro*/
    if(form.getValue("valor") == ""){
        mensagem += "É de graça, queride?";
    }
    if(mensagem != ""){
        throw mensagem;
    }
}
