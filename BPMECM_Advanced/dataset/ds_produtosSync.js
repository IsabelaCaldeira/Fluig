function defineStructure(){

    addColumn("B1_COD");
    addColumn("B1_DESC");
    addColumn("B1_UM");
    setKey(["B1_COD"]);
    addIndex(["B1_COD"]);

}
function onSync(lastSyncDate){
    
    var dataset = DatasetBuilder.newDataset();

    var fields = new Array();
    var where = "";
    var branch = "";
        
    fields.push("SB1");
    fields.push(where);
    fields.push(branch);
    
    fields.push('B1_COD');
    fields.push('B1_DESC');
    fields.push('B1_UM');

    var resultadoProtheus = DatasetFactory.getDataset("");

}
function createDataset(fields, constraint, sortFields) {

}
function onMobileSync(user){
    
}