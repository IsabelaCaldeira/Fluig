function defineStructure() {

}
function onSync(){

}
function createDataset(fields, constraints, sortfields){

    var ds = DatasetBuilder.newDataset();

    ds.addcolumn("simbolo");
    ds.addcolumn("nomeMoeda");

    ds.addRow(new Array("R$","Real"));
    ds.addRow(new Array("US$","Dólar Americano"));
    ds.addRow(new Array("CAD","Dólar Canadense"));

    return ds;

}
function onMobileSync(user){

}