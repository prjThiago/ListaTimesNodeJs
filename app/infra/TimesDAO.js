function TimesDAO(connection){
	this._connection = connection;
}

TimesDAO.prototype.lista = function(callback){

	this._connection.query('select * from times', callback);

};

module.exports = function(){

	return TimesDAO;
}