module.exports = function(app){

	app.get('/estados', function(req, res){

		var connection = app.infra.connectionFactory();
		
		var estadosList = new app.infra.EstadosDAO(connection);

		estadosList.lista(function(err, resposta) {
			res.format({
				html: function() {
					res.render('estado/lista', {list: resposta});
				},
				json: function() {
					res.json(resposta);
				}
			});
			
		});

		connection.end();

	});

	app.get('/estados/cria', function(req, res){
		res.render('estado/form');
	});

	app.post('/estados', function(req, res){
		var estado = req.body,
			connection = app.infra.connectionFactory(),
			estadosDAO = new app.infra.EstadosDAO(connection);		

		estadosDAO.salva(estado, function(err, result){
			res.redirect('/estados');
		});
		
		connection.end();
	});

}