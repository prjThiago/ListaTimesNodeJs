function EstadosDAO(connection){
	this._connection = connection;
}

EstadosDAO.prototype.lista = function(callback){

	this._connection.query('select * from estados', callback);

};

EstadosDAO.prototype.salva = function(produto, callback){
	this._connection.query('insert into estados set ?', produto, callback);
};

module.exports = function(){

	return EstadosDAO;
}
