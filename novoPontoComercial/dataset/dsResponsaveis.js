function createDataset(fields, constraints, sortfields){

    var ds = DatasetBuilder.newDataset();

    ds.addColumn("login");
    ds.addColumn("nome");

    var filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "responsaveis", "responsaveis", ConstraintType.MUST);

    var dsGroup = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);

    for(i = 0; i < dsGroup.rowsCount; i++){
        var colabGroup = dsGroup.getValue(i, "colleagueGroupPK.colleagueId");

        var dsColab = DatasetFactory.getDataset("colleague", null, null, null);

        for(j = 0; j < dsColab.rowsCount; j++){
            var colabColumn = dsColab.getValue(j, "colleaguePK.colleagueId");
            var colabName = dsColab.getValue(j,"colleagueName")
            if(colabGroup == colabColumn)
                ds.addRow(new Array(colabColumn, colabName));
        }
    }

    return ds;

}