function DivisoesDAO(connection){
	this._connection = connection;
}

DivisoesDAO.prototype.lista = function(callback){

	this._connection.query('select * from divisoes', callback);

};

module.exports = function(){

	return DivisoesDAO;
}