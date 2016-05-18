module.exports = function(app){

	app.get('/serie_a', function(req, res){
		res.render("serie_a/lista");
	});

	app.get('/serie_b', function(req, res){
		res.render("serie_b/lista");
	});

}