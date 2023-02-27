function defineStructure() {

}
function onSync(){

}
function createDataset(fields, constraints, sortfields){

    var ds = DatasetBuilder.newDataset();

    ds.addColumn("simbolo");
    ds.addColumn("nomeMoeda");
    ds.addColumn("descCompleta");
    
    ds.addRow(new Array("R$","Real","R$ Real"));
    ds.addRow(new Array("US$","Dólar Americano", "U$ Dólar Americano"));
    ds.addRow(new Array("CAD","Dólar Canadense", "CAD descCompleta"));

    return ds;

}
function onMobileSync(user){

}