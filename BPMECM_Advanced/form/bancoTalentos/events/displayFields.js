function displayFields(form, customHTML){

    var usuário = getValue(WKUser);

    var nome = form.getValue("nome");
    var celular = form.getValue("celular");
    var email = form.getValue("email");
    var linkedin = form.getValue("linkedin");

    var interacao = "<h1>Oiii, <b>"+usuário+"</b>!! Temos um novo canditade: "+nome+ " está desejando trabalhar conosco! <h1><br>" +
    "<h3>Ficou curioso, né? É só acessar o Linkedin delu:<b>" +linkedin+ "</b>Mas não esqueça de entrar em contato depois, hein?<br>" +
    "Para te ajudar, aqui segue o email e o celular para contato<b>" +email+"</b>,<b>" +celular+"</b>. Agradecemos pela atenção, queride </h3>"

    customHTML.append('<script>$("mensagemInteracao").append("'+interacao+'")</script>');
    customHTML.append('<script>$("mensagemInteracao").show();$(#principalForm).hide();</script>');

}