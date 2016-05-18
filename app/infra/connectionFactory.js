/*Apenas um comentário do post8*/
var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'listatimes'
	});

};

//wrapper
module.exports = function(){
	return createDBConnection
};