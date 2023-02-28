function intermediateconditional2() {

    var valorDesejado = hAPI.getCardValue("valorDesejado");

    var ds = DatasetFactory.getDataset("dsValorDolar0311", null, null, null);
    valorAtual = ds.getValue(0, "valorDolar");

    if(valorAtual <= valorDesejado){
        return true;
    }

}