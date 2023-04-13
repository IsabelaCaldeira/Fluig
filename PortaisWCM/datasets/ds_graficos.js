function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("Produto");
    dataset.addColumn("Valor");

    dataset.addRow(new Array("Refrigerador",1500));
    dataset.addRow(new Array("Guarda-roupas",2000));
    dataset.addRow(new Array("Fogão",3500));
    dataset.addRow(new Array("Ferro de passar",100));
    dataset.addRow(new Array("Máquina de lavar",800));

    return dataset;


}function onMobileSync(user) {

}