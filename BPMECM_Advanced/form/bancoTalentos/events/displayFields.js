function displayFields(form,customHTML){

	var usuario = getValue("WKUser");
  
	 var nome = form.getValue("nome");
	 var celular = form.getValue("celular");
	 var email = form.getValue("email");
	 var linkedin = form.getValue("linkedin");
	 var cargo = form.getValue("cargo");
	 
	 var interacao = "<h1>Oiii, <b>"+usuario+"</b>!! Temos um novo canditade: <b>"+nome+ "</b> para o cargo de <b>"+cargo+"</b>!!<h1><br>" +
	 "<h3>Ficou curioso, né? É só acessar o Linkedin delu:<b>" +linkedin+ "</b>Mas não esqueça de entrar em contato depois, hein?<br>" +
	 "Para te ajudar, aqui segue o email e o celular para contato<b>" +email+"</b>,<b>" +celular+"</b>.<br>"  +
	 "Agradecemos pela atenção, queride </h3>"
	 
	 if(nome != ""){
	 	customHTML.append('<script>$("#mensagemInteracao").append("'+interacao+'")</script>');
	 	customHTML.append('<script>$("#mensagemInteracao").show();$("#formPrincipal").hide();</script>');
	 }
}