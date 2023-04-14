function beforeTaskSave(colleagueId,nextSequenceId,userList){
	var NOME_DATASERVER = "RhuEntidadesData";  
	  
    /* Prepararação das variaveis */  
      //usuário e senha do aplicativo RM. O mesmo utilizado para logar no sistema e que tenha permissão de   
      //acesso ao cadastro que deseja utilizar  
      var usuario = "mestre";  
      var senha = "integracao";  
      //importante passar no contexto o mesmo código de usuário usado para logar no webservice  
      var context = "CodUsuario=mestre;CodSistema=F;CodColigada=1"  
    /* Fim Prepararação das variaveis */  
        
  
    try{  
          
        if (isEmpty(hAPI.getCardValue("CODENTIDADE")))     
        return      
        var primaryKey = hAPI.getCardValue("CODENTIDADE");  
  
        // carrega o webservice...  
        var authService = getWebService(usuario, senha);  
        // define o contexto...  
        var context = "CodUsuario=mestre;CodSistema=F;CodColigada=1"  
        // faz a leitura...  
        var text = new String(authService.readRecord(NOME_DATASERVER, primaryKey, context));  
  
        if (!ChekExist(text))  
            text = GetXml();  
  
        // atualiza o valor...  
        text = replaceValue(text, "CODENTIDADE" , hAPI.getCardValue("CODENTIDADE"));   
        text = replaceValue(text, "RAZAOSOCIAL" , hAPI.getCardValue("RAZAOSOCIAL"));   
        text = replaceValue(text, "NOMEFANTASIA" , hAPI.getCardValue("NOMEFANTASIA"));   
        text = replaceValue(text, "NUMTELEFONE1" , hAPI.getCardValue("NUMTELEFONE1"));   
        text = replaceValue(text, "NUMTELEFONE2" , hAPI.getCardValue("NUMTELEFONE2"));   
        text = replaceValue(text, "CODAREAATUACAO" , hAPI.getCardValue("CODAREAATUACAO"));   
        text = replaceValue(text, "LOGRADOURO" , hAPI.getCardValue("LOGRADOURO"));   
        text = replaceValue(text, "NUMERO" , hAPI.getCardValue("NUMERO"));   
        text = replaceValue(text, "COMPLEMENTO" , hAPI.getCardValue("COMPLEMENTO"));   
        text = replaceValue(text, "BAIRRO" , hAPI.getCardValue("BAIRRO"));   
        text = replaceValue(text, "LOCALIDADE" , hAPI.getCardValue("LOCALIDADE"));   
        text = replaceValue(text, "ESTADO" , hAPI.getCardValue("ESTADO"));   
        text = replaceValue(text, "CEP" , hAPI.getCardValue("CEP"));   
        text = replaceValue(text, "PAIS" , hAPI.getCardValue("PAIS"));   
        text = replaceValue(text, "INSCEST" , hAPI.getCardValue("INSCEST"));   
        text = replaceValue(text, "INSCMUN" , hAPI.getCardValue("INSCMUN"));   
        text = replaceValue(text, "FAX" , hAPI.getCardValue("FAX"));   
        text = replaceValue(text, "CONTATO" , hAPI.getCardValue("CONTATO"));   
        text = replaceValue(text, "OBS" , hAPI.getCardValue("OBS"));   
        text = replaceValue(text, "EMAIL" , hAPI.getCardValue("EMAIL"));   
        text = replaceValue(text, "ISENTOIRRF" , hAPI.getCardValue("ISENTOIRRF"));   
        text = replaceValue(text, "TIPOENTIDADE" , hAPI.getCardValue("TIPOENTIDADE"));   
        text = replaceValue(text, "CEI" , hAPI.getCardValue("CEI"));   
        text = replaceValue(text, "CGCCPF" , hAPI.getCardValue("CGCCPF"));   
        text = replaceValue(text, "MINISTRATREIN" , hAPI.getCardValue("MINISTRATREIN"));   
        text = replaceValue(text, "CODGRUPOENTIDADE" , hAPI.getCardValue("CODGRUPOENTIDADE"));   
        text = replaceValue(text, "CODENTIDADECURR" , hAPI.getCardValue("CODENTIDADECURR"));   
        text = replaceValue(text, "RAMAL" , hAPI.getCardValue("RAMAL"));   
        text = replaceValue(text, "INATIVA" , hAPI.getCardValue("INATIVA"));   
        text = replaceValue(text, "ENTCURRICULAR" , hAPI.getCardValue("ENTCURRICULAR"));   
        text = replaceValue(text, "EXIBEINTERNET" , hAPI.getCardValue("EXIBEINTERNET"));   
        text = replaceValue(text, "EXIBEACADEMICO" , hAPI.getCardValue("EXIBEACADEMICO"));   
        text = replaceValue(text, "EXIBEPROFISSIONAL" , hAPI.getCardValue("EXIBEPROFISSIONAL"));   
        text = replaceValue(text, "NOMEAREAATUACAO" , hAPI.getCardValue("NOMEAREAATUACAO"));   
        text = replaceValue(text, "NOMEGRUPOENTIDADE" , hAPI.getCardValue("NOMEGRUPOENTIDADE"));   
  
  
        var result = new String(authService.saveRecord(NOME_DATASERVER, text, context));   
          
    // se retornou a chave, salvou ok...  
        checkIsPK(result, 1);  
    }  
    catch (e)   
    {  
        if (e == null)  e = "Erro desconhecido!";  
        var mensagemErro = "Ocorreu um erro ao salvar dados no RM: " + e;  
        throw mensagemErro;  
    }     
}  
  
          
function GetXml()  
{  
    return "<RhuEntidades>" +   
"  <VEntidades>" +   
"    <CODENTIDADE>0000000000000000</CODENTIDADE>" +   
"    <RAZAOSOCIAL>Laboratório São Jorge</RAZAOSOCIAL>" +   
"    <NOMEFANTASIA>Laboratório São Jorge</NOMEFANTASIA>" +   
"    <NUMTELEFONE1>429-5530</NUMTELEFONE1>" +   
"    <NUMTELEFONE2>429-5540</NUMTELEFONE2>" +   
"    <CODAREAATUACAO>00003</CODAREAATUACAO>" +   
"    <LOGRADOURO>Rua dos Artesãos</LOGRADOURO>" +   
"    <NUMERO>8889</NUMERO>" +   
"    <BAIRRO>Aleijadinho</BAIRRO>" +   
"    <ESTADO>MG</ESTADO>" +   
"    <CEP>30000</CEP>" +   
"    <PAIS>Brasil</PAIS>" +   
"    <FAX>429-5550</FAX>" +   
"    <CONTATO>Padre José</CONTATO>" +   
"    <OBS>Usado para a conversão do RM Labore.</OBS>" +   
"    <EMAIL>Labsaojorge@ig.com.br</EMAIL>" +   
"    <TIPOENTIDADE>1</TIPOENTIDADE>" +   
"    <MINISTRATREIN>0</MINISTRATREIN>" +   
"    <CODGRUPOENTIDADE>00009</CODGRUPOENTIDADE>" +   
"    <INATIVA>0</INATIVA>" +   
"    <ENTCURRICULAR>1</ENTCURRICULAR>" +   
"    <EXIBEINTERNET>0</EXIBEINTERNET>" +   
"    <EXIBEACADEMICO>0</EXIBEACADEMICO>" +   
"    <EXIBEPROFISSIONAL>1</EXIBEPROFISSIONAL>" +   
"  </VEntidades>" +   
"  <VEntidadesCompl>" +   
"    <CODENTIDADE>0000000000000000</CODENTIDADE>" +   
"  </VEntidadesCompl>" +   
"</RhuEntidades>";
}


/**'
* A API de autenticação da Totvs baseia no "Basic access authentication" do HTTP.
 * Código Java para autenticação 
 * Programa responsável por integrar com os Webservices do RM 
 *  Exemplo dev valores para os parâmetros 
 *		@param string Usuario = "mestre";
 *		@param string Senha = "totvs";
*/

function getWebService(Usuario, Senha){

    var Nome_Servico = "WSDATASERVER";
    var Caminho_Servico = "com.totvs.WsDataServer";
    
	var dataServerService = ServiceManager.getServiceInstance(Nome_Servico);
	if(dataServerService == null){
		throw "Servico nao encontrado: " + Nome_Servico;
	}
	
	var serviceLocator = dataServerService.instantiate(Caminho_Servico);
	if(serviceLocator == null){
		throw "Instancia do servico nao encontrada: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var service = serviceLocator.getRMIwsDataServer();	
	if(service == null){
		throw "Instancia do dataserver do invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var serviceHelper = dataServerService.getBean();
	if(serviceHelper == null){
		throw "Instancia do service helper invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}

	var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", Usuario, Senha);	  
	if(serviceHelper == null){
		throw "Instancia do auth service invalida: " + Nome_Servico + " - " + Caminho_Servico;
	}
	
	return authService;
}


function dcReadView(dataservername, context, usuario, senha, filtro)
{	 
      // carrega o webservice...
	  var authService = getWebService(usuario, senha);
	  
      // lê os dados da visão respeitando o filtro passado
	  var viewData = new String(authService.readView(dataservername, filtro, context));

	  return viewData;
 }


function dcReadRecord(dataservername, context, usuario, senha, primaryKey)
{	 
      // carrega o webservice...
	  var authService = getWebService(usuario, senha);

      // lê os dados do registro respeitando a pk passada
	  try
	  {
		var recordData = new String(authService.readRecord(dataservername, primaryKey, context));
	  }
	  catch (e) 
	  {
		  var recordData = new String(authService.getSchema(dataservername, context));
	  }
	  
	  return recordData;
 }
  
 
function dcSaveRecord(dataservername, context, usuario, senha, xml)
{	 
      // carrega o webservice...
	  var authService = getWebService(usuario, senha);

      // salva o registro de acordo com o xml passado
	  var pk = new String(authService.readRecord(dataservername, xml, context));
	  	  
	  return pk;
 }
 
 
//Transforma o conceito de constraints do Fluig para o Filtro do TBC.
function parseConstraints(constraints, filterRequired)
{
	// inicializa o resultado...
	var result = [];
	result.context = "";
	
	// inicializa o filtro...
	var filter = "";
	
	// varre as contraints...
    for	(con in constraints) {
    	var fieldName = con.getFieldName().toUpperCase();
    	if (fieldName == "RMSCONTEXT")
    	{
    		result.context = con.getInitialValue();
    		continue;
    	}
    	
    	filter += "(";
    	
    	if (fieldName == "RMSFILTER")
		{
    		filter += con.getInitialValue();
		}
    	else
		{
    		if (con.getInitialValue() == con.getFinalValue() || isEmpty(con.getFinalValue()))
			{
				filter += con.getFieldName();
				var isLike = false;
				switch(con.getConstraintType())
				{
					case ConstraintType.MUST:
						filter += " = ";
					break;
					case ConstraintType.MUST_NOT:
						filter += " = ";
					break;
					case ConstraintType.SHOULD:
						filter += " LIKE ";
						isLike = true;
					break;
					case ConstraintType.SHOULD_NOT:
						filter += " NOT LIKE ";
						isLike = true;
					break;
				}
				filter += getFormattedValue(con.getInitialValue(), isLike);
			}
    		else
			{
    			filter += con.getFieldName();
    			filter += " BETWEEN ";
    			filter += getFormattedValue(con.getInitialValue(), false);
    			filter += " AND ";
    			filter += getFormattedValue(con.getFinalValue(), false);
			}
		}
    	
		filter += ") AND ";
	}
    
    if (filter.length == 0)
    {
    	if(filterRequired){
    	  filter = "1=1";
    	}
    	else{
      	  filter = "1=1";
    	}
    }
    else
    	filter = filter.substring(0, filter.length-5);
    
    // guarda o filtro...
    result.filter = filter;
    
    // retorna o resultado...
    return result;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function getFormattedValue(value, isLike){
	if(isLike){
	  return "'%" + value + "%'";
	}
	else{
	  return "'" + value + "'";
	}
}



function getXMLFromString(xmlString) {
	var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
	var parser = factory.newDocumentBuilder();
	var is = new org.xml.sax.InputSource();
    is.setCharacterStream(new java.io.StringReader(xmlString));
	return parser.parse(is);
}

 
 function abrirPesquisa(DATASET_ID, dataFields, resultFields, type, title){	
	window.open("/webdesk/zoom.jsp" +
	"?datasetId=" +
	DATASET_ID +
	"&dataFields=" +
	dataFields +
	"&resultFields=" +
	resultFields +
	"&type=" +
	type+
	"&title=" +
	title 	
	, "zoom", "status,scroolbars=no,width=600,height=350,top=0,left=0");
}

function checkIsPK(result, qtd){
	var lines = result.split('\r');
	
	if(lines.length == 1){
		var pk = result.split(';');
		if(pk.length == qtd)
			return;
	}
		throw result;
	
}

 function ChekExist(result)
 {
	 var lines = result.split('\r');
	if(lines.length > 1)
		return true
	else
		return false;
 }
 

function replaceValue(text, columnName, newValue){

	
	if ((newValue != null) && (newValue.trim() != ""))
	{
		var regex = new RegExp("<" + columnName + ">(.*?)<\\/" + columnName + ">", "g");
		var replaceText = "<" + columnName + ">" + newValue + "</" + columnName + ">";
		
		return text.replace(regex, replaceText);
	}
	else
		return text;
}


function isEmpty(str) {
    return (!str || 0 === str.length);
}
