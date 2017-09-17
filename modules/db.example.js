//Renomeie Este Arquivo Para db.js, Fazendo as Devidas Alterações de Parâmetros
var mysql = require('mysql');

var con = function() {
	return mysql.createConnection({
		host: "host",
		user: "usuário",
		password: "senha",
		database: "blog_node"
	});
};

module.exports = con;