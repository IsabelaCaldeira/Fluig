function setSelectedZoomItem(selectedItem) {
	if (selectedItem.inputId.indexOf("ITEMTB___") != -1) {
		var seq = selectedItem.inputId.split("___")[1];
		$("#PRECOUN___" + seq).val( numeroParaMoeda(selectedItem["PRECOUNITARIO"]) );
	}
	
	if (selectedItem.inputId.indexOf("CCUSTO") != -1) {
		$("#CODCCUSTO").val( selectedItem["CODCCUSTO"] );
		
		gerarAprovadores();
		setCCU();
	}
	
	if (selectedItem.inputId.indexOf("ENTREGAPRAZO") != -1) {
		$("#ENTREGAPRAZOTXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	if (selectedItem.inputId.indexOf("ATENDESCOPO") != -1) {
		$("#ATENDESCOPOTXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	if (selectedItem.inputId.indexOf("QUALIDADE") != -1) {
		$("#QUALIDADETXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	if (selectedItem.inputId.indexOf("SEGURANCA") != -1) {
		$("#SEGURANCATXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	if (selectedItem.inputId.indexOf("MEIOAMBIENTE") != -1) {
		$("#MEIOAMBIENTETXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	if (selectedItem.inputId.indexOf("BMSPRAZO") != -1) {
		$("#BMSPRAZOTXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	if (selectedItem.inputId.indexOf("IDFPRAZO") != -1) {
		$("#IDFPRAZOTXT").val( selectedItem["DESCCOMPLETA"] );
	}
	
	//teste
	if (selectedItem.inputId.indexOf("EJIF") != -1) {
		$("#EJIFTXT").val( selectedItem["CODINTERNO"] );
		validaFluxo();
	}
	
	if (selectedItem.inputId.indexOf("CENTROCUSTOITEM___")!="-1") {
		
		var seq = selectedItem.inputId.split("___")[1];
		
		$("#CODCCUSTOITEM___"+seq).val(selectedItem["CODCCUSTO"]);
		$("#DESCRICAOCCUITEM___"+seq).val(selectedItem["DESCCOMPLETA"]);
		//carregaOS();
	}
	

	if (selectedItem.inputId.indexOf("CENTROCUSTOITEMOS___")!="-1") {
		
		var seq = selectedItem.inputId.split("___")[1]
		
		$("#CENTROCUSTOITEMOSTXT___"+seq).val(selectedItem["OS"]);
		
		/*$("input[id^='DESCRICAOCCUITEM___']").each(function(index, value){

			var seq = $(this).attr("id").split("___")[1];

			reloadZoomFilterValues("CENTROCUSTOITEMOS___" + seq, "FILIAL," + selectedItem["FILIAL"]);
		});*/	
			
	}
}

function carregaOS(){
		console.log("ENTREI CARREGA OS");
    	
		var filial = document.getElementById('FILIAL').value; // "???????" é um dos campos "coluna" do dataset
		console.log("MINHA FILIAL É: " + filial);
		
		var seq = $(this).attr("id").split("___")[1];

		reloadZoomFilterValues("CENTROCUSTOITEMOS___" + seq, "FILIAL," + filial);    
}

function aprovacao(e){
	var id = $(e).attr("id");
	var checkado = $(e).is(":checked");
	if(checkado){
		$("#ATVAPROV").val("SIM");
	}
	else{
		$("#ATVAPROV").val("NAO");
	}
	validaFluxo();
}

function aprovacaoCustos(){ // FUNÇÃO ONCHANGE
	var area = FLUIGC.switcher.getState("#APROVACAOCUSTOS");
	if (area == true){
		$("#divREVISARCUSTOS").hide();
		$("#APROVACAOCUSTOSMOTIVO").val("");
	} else if (area == false) {
		$("#divREVISARCUSTOS").show();
	} else {
		$("#divREVISARCUSTOS").show();
	}
}

function revisarCustos(){ 
	var area1 = FLUIGC.switcher.getState("#REVISARCUSTOS");	
	if (area1 == true){
		$('#REVISARCUSTOSTXT').val("S");
	} else if (area1 == false) {
		$('#REVISARCUSTOSTXT').val("N");
		
	} else {
		$('#REVISARCUSTOSTXT').val("N");
	}
	validaFluxo();
}

function aprovacaoCoordCorp(){ // FUNÇÃO ONCHANGE
	var area = FLUIGC.switcher.getState("#APROVACAOCOORDCORP");
	if (area == true){
		$("#divREVISARCOORDCORP").hide();
		$("#APROVACAOCOORDCORPMOTIVO").val("");
	} else if (area == false) {
		$("#divREVISARCOORDCORP").show();
	} else {
		$("#divREVISARCOORDCORP").show();
	}
}

function revisarCoordCorp(){ 
	var area1 = FLUIGC.switcher.getState("#REVISARCOORDCORP");	
	if (area1 == true){
		$('#REVISARCOORDCORPTXT').val("S");
	} else if (area1 == false) {
		$('#REVISARCOORDCORPTXT').val("N");
		
	} else {
		$('#REVISARCOORDCORPTXT').val("N");
	}
	validaFluxo();
}

function aprovacaoGerCorp(){ // FUNÇÃO ONCHANGE
	var area = FLUIGC.switcher.getState("#APROVACAOGERCORP");
	if (area == true){
		$("#divREVISARGERCORP").hide();
		$("#APROVACAOGERCORPMOTIVO").val("");
	} else if (area == false) {
		$("#divREVISARGERCORP").show();
	} else {
		$("#divREVISARGERCORP").show();
	}
}

function revisarGerCorp(){ 
	var area1 = FLUIGC.switcher.getState("#REVISARGERCORP");	
	if (area1 == true){
		$('#REVISARGERCORPTXT').val("S");
	} else if (area1 == false) {
		$('#REVISARGERCORPTXT').val("N");
		
	} else {
		$('#REVISARGERCORPTXT').val("N");
	}
	validaFluxo();
}

function aprovacaoGerArea(){ // FUNÇÃO ONCHANGE
	var area = FLUIGC.switcher.getState("#APROVACAOGERAREA");
	if (area == true){
		$("#divREVISARGERAREA").hide();
		$("#APROVACAOGERAREAMOTIVO").val("");
	} else if (area == false) {
		$("#divREVISARGERAREA").show();
	} else {
		$("#divREVISARGERAREA").show();
	}
}

function revisarGerArea(){ 
	var area1 = FLUIGC.switcher.getState("#REVISARGERAREA");	
	if (area1 == true){
		$('#REVISARGERAREATXT').val("S");
	} else if (area1 == false) {
		$('#REVISARGERAREATXT').val("N");
		
	} else {
		$('#REVISARGERAREATXT').val("N");
	}
	validaFluxo();
}

function validaFluxo(){
	var filial = $("#FILIAL").val();
	var aprov = $("#ATVAPROV").val();
	var atv = $("#ATIVIDADE").val();
	var EJIF = $("#EJIF").val();
	console.log("EJIF: " + EJIF);
	var vlTot = $("#BMSATUAL").val().replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".");
	var prox = "";
	if(atv == 48){
		console.log("Ejif antes do IF : " + EJIF);
		
		console.log("Ejif dentro do IF : " + EJIF);
		if(aprov == "SIM"){
			if (EJIF == '00.0.00.000 - OPEX'){
				if(filial == "1"){
					prox = "CC";
					console.log("prox 1: "+EJIF);
				}
				else{
					prox = "GA";
					console.log("prox GA");
				}
			}
			else{
				prox = "CUS";
				console.log("prox CUS");
			}
		}
		else{
			prox = "NAO";
			console.log("prox NAO");
		}
	}
	else if (atv == 80){
			if(aprov == "SIM"){
				if(filial == "1"){
					prox = "CC";
					console.log("prox CC 2: "+EJIF);
				}
				else{
					prox = "GA";
					console.log("prox GA");
				}
			}
			else{
				var revisar = $("#REVISARCUSTOSTXT").val();
				console.log("Revisar:" + revisar);
				if(revisar == "S"){
					prox = "REVISAR";
				} else{
					prox = "NAO"; // SE NÃO APROVAR "FIM"
				}
			}		
	}	
	else if(atv == 8){
		if(aprov == "SIM"){
			if( parseFloat(vlTot) <= "14000.00" ){
				prox = "SIM";
			}
			else{
				prox = "GC";
			}
		}
		else{
			var revisar = $("#REVISARCOORDCORPTXT").val();
			console.log("Revisar:" + revisar);
			if(revisar == "S"){
				prox = "REVISAR";
			} else{
				prox = "NAO"; // SE NÃO APROVAR "FIM"
			}
			
		}
	}
	else if(atv == 15){
		if(aprov == "SIM"){
			if( parseFloat(vlTot) <= "140000.00" ){
				prox = "SIM";
			}
			else{
				prox = "VP";
			}
		}
		else{
			var revisar = $("#REVISARGERCORPTXT").val();
			console.log("Revisar:" + revisar);
			if(revisar == "S"){
				prox = "REVISAR";
			} else{
				prox = "NAO"; // SE NÃO APROVAR "FIM"
			}
		}
	}
	else if(atv == 30){
		if(aprov == "SIM"){
			if( parseFloat(vlTot) <= "14000.00" ){
				prox = "SIM";
			}
			else{
				prox = "GG";
			}
		}
		else{
			var revisar = $("#REVISARGERAREATXT").val();
			console.log("Revisar:" + revisar);
			if(revisar == "S"){
				prox = "REVISAR";
			} else{
				prox = "NAO"; // SE NÃO APROVAR "FIM"
			}
		}
	}
	else if(atv == 34){
		if(aprov == "SIM"){
			if( parseFloat(vlTot) <= "140000.00" ){
				prox = "SIM";
			}
			else{
				prox = "VP";
			}
		}
		else{
			prox = "NAO";
		}
	}
	
	$("#DECISAO").val( prox );
}

function gerarAprovadores(){
	var codCCusto = $("#CODCCUSTO").val();
	console.log("codCCusto: " + codCCusto);
	
	var c1 = DatasetFactory.createConstraint("CODCCUSTO", codCCusto, codCCusto, ConstraintType.MUST);
	var constraints = new Array(c1);
	
	var dataset = DatasetFactory.getDataset("dsCRMSUP001Aprovadores", null, constraints, null);
	
	var row = dataset.values;
	var count = dataset.values.length;
	
	var rep = row[0];
	
	var userCC;
	var userCUS;
	var userGC;
	var userVPADM;
	var userGA;
	var userGG;
	var userVPOP;
	
	var CC = rep["Supervisor"];
	if(CC == "" || CC == null){
		Swal.fire({
			icon: 'error',
			title: 'Aprovador Coordenador Corporativo não encontrado!'
		});
		return false;
	}
	var c1 = DatasetFactory.createConstraint("mail", CC, CC, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	var userCCLeng = dataset2.values.length;
	if(userCCLeng > 0){
		userCC = dataset2.values[0]["colleaguePK.colleagueId"];
		console.log("userGA: " + userCC);
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Aprovador ' + CC + ' não possui usuário no Fluig!'
		});
		
		return false;
	}
	
	
	//=====================================================
	//Custos
	
	var CUS = rep["CUSTOS"];
	if(CUS == "" || CUS == null){
		Swal.fire({
			icon: 'error',
			title: 'Aprovador Custos não encontrado!'
		});
		return false;
	}
	var c1 = DatasetFactory.createConstraint("mail", CUS, CUS, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	var userCUSLeng = dataset2.values.length;
	if(userCUSLeng > 0){
		userCUS = dataset2.values[0]["colleaguePK.colleagueId"];
		console.log("userGUS: " + userCUS);
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Aprovador ' + CUS + ' não possui usuário no Fluig!'
		});
		
		return false;
	}
	
	
	//=====================================================
	//GS
	var GC = rep["Gerente"];
	if(GC == "" || GC == null){
		Swal.fire({
			icon: 'error',
			title: 'Aprovador Gerente Corporativo não encontrado!'
		});
		
		return false;
	}
	var c1 = DatasetFactory.createConstraint("mail", GC, GC, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	var userGCLeng = dataset2.values.length;
	if(userGCLeng > 0){
		userGC = dataset2.values[0]["colleaguePK.colleagueId"];
		if(userCC == $("#USERVALIDADOR").val()){/*verifica se o coordenador é o validador tecnico, se for vai descer a alçada*/
			userCC = userGC;
			console.log("Novo userCC: " + userCC);
		}
		console.log("userGC: " + userGC);
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Aprovador ' + GC + ' não possui usuário no Fluig!'
		});
		
		return false;
	}
	
	//=====================================================
	//GG
	var VPADM = rep["VP"];
	if(VPADM == "" || VPADM == null){
		Swal.fire({
			icon: 'error',
			title: 'Aprovador VP ADM não encontrado!'
		});
		
		return false;
	}
	var c1 = DatasetFactory.createConstraint("mail", VPADM, VPADM, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	var usercVPADMLeng = dataset2.values.length;
	if(usercVPADMLeng > 0){
		userVPADM = dataset2.values[0]["colleaguePK.colleagueId"];
		console.log("userVPADM: " + userVPADM);
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Aprovador ' + VPADM + ' não possui usuário no Fluig!'
		});
		return false;
	}
	
	//=====================================================
	//VP
	var GA = rep["Gerente"];
	if(GA == "" || GA == null){
		Swal.fire({
			icon: 'error',
			title: 'Aprovador Gerente de Área não encontrado!'
		});
		
		return false;
	}
	var c1 = DatasetFactory.createConstraint("mail", GA, GA, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	var userGALeng = dataset2.values.length;
	if(userGALeng > 0){
		userGA = dataset2.values[0]["colleaguePK.colleagueId"];
		console.log("userGA: " + userGA);
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Aprovador ' + GA + ' não possui usuário no Fluig!'
		});
		
		return false;
	}
	
	//=====================================================
	//CFO
	var GG = rep["Gerente_Geral"];
	if(GG != "" && GG != null){
		var c1 = DatasetFactory.createConstraint("mail", GG, GG, ConstraintType.MUST);
		var constraints = new Array(c1);
		var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
		var userGGLeng = dataset2.values.length;
		if(userGGLeng > 0){
			userGG = dataset2.values[0]["colleaguePK.colleagueId"];
			console.log("userGG: " + userGG);
		}
		else{
			Swal.fire({
				icon: 'error',
				title: 'Aprovador ' + GG + ' não possui usuário no Fluig!'
			});
			return false;
		}
	}
	
	//=====================================================
	//CEO
	var VPOP = rep["VP"];
	if(VPOP == "" || VPOP == null){
		Swal.fire({
			icon: 'error',
			title: 'Aprovador VP OP não encontrado!'
		});
		return false;
	}
	var c1 = DatasetFactory.createConstraint("mail", VPOP, VPOP, ConstraintType.MUST);
	var constraints = new Array(c1);
	var dataset2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	var userVPOPLeng = dataset2.values.length;
	if(userVPOPLeng > 0){
		userVPOP = dataset2.values[0]["colleaguePK.colleagueId"];
		console.log("VPOP: " + userVPOP);
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Aprovador ' + VPOP + ' não possui usuário no Fluig!'
		});
		return false;
	}
	
	
	//=====================================================
	//PREENCHENDO OS CAMPOS COM OS APROVADORES
	//$("#USERVALIDADOR").val( userCustos );
	$("#USERCOORDCORP").val( userCC );
	$("#USERGERCORP").val( userGC );
	$("#USERVPADM").val( userVPADM );
	$("#USERGERAREA").val( userGA );
	$("#USERGG").val( userGG );
	$("#USERVPOP").val( userVPOP );
	$("#USERCUSTOS").val( userCUS );
}