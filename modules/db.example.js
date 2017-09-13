//Renomeie Este Arquivo Para db.js, Fazendo as Devidas Alterações de Parâmetros
module.exports = function() {var mysql = require('mysql');
	var conn = mysql.createConnection({
		host: "host",
		user: "usuário",
		password: "senha",
		database: "blog_node"
	});

	conn.connect();
};