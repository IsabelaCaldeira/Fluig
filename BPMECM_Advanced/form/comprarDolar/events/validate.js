function validateForm(form){

    var mensagem = "";

    if(form.getValue(valorDesejado) == ""){
        mensagem += "Você não me contou quanto quer o dólar";
    }

    if(mensgem != ""){
        throw mensagem;
    }
}