var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },

    showMessage: function () {
    	
    	var c1 = DatasetFactory.createConstraint("CODENTIDADE", $("#codEntidade").val(), $("#codEntidade").val(), ConstraintType.MUST);
    	var c2 = DatasetFactory.createConstraint("RAZAOSOCIAL", $("#razaoSocial").val(), $("#razaoSocial").val(), ConstraintType.MUST);
    	var c3 = DatasetFactory.createConstraint("NOMEFANTASIA", $("#nomeFantasia").val(), $("#nomeFantasia").val(), ConstraintType.MUST);
    	
    	var constraints = new Array(c1, c2, c3);
    	
        DatasetFactory.getDataset("dsInsereEntidades", null, constraints, null);
    }
});