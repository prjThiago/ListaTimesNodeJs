module.exports = function(app){

	app.get('/estados', function(req, res){

		var connection = app.infra.connectionFactory();
		
		var estadosList = new app.infra.EstadosDAO(connection);

		estadosList.lista(function(err, resposta) {
			res.render('estado/lista', {list: resposta});
		});

		connection.end();

	});

	app.get('/estados/cria', function(req, res){
		res.render('estado/form');
	});

	app.post('/estados', function(req, res){
		var estado = req.body,
			connection = app.infra.connectionFactory(),
			estadosDAO = app.infra.EstadosDAO(connection);		

		estadosDAO.salva(estado, function(err, result){
			res.redirect('/estados');
		});
	});

}