$("#criarUsuario").click(function(){
    var c1 = DatasetFactory.createConstraint("colleagueId", $("#login").val(),$("#login").val(),  ConstraintType.MUST);
    var c2 = DatasetFactory.createConstraint("colleagueName", $("#nome").val(),$("#nome").val(), ConstraintType.MUST);
    var c3 = DatasetFactory.createConstraint("login", $("#login").val(),$("#login").val(),  ConstraintType.MUST);
    var c4 = DatasetFactory.createConstraint("mail", $("#email").val(),$("#email").val(),  ConstraintType.MUST);
    var c5 = DatasetFactory.createConstraint("passwd", $("#senha").val(),$("#senha").val(), ConstraintType.MUST);

    var constraints = new Array(c1,c2,c3,c4,c5);

    DatasetFactory.getDataset("criaUser", null, constraints, null);
})


