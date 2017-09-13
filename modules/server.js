module.exports = function() {
	//Express.js:
	var express = require('express');
	//App:
	var app = express();
	//Rotas:
	var routes = require('../modules/routes');
	//Banco de Dados:
	var db = require('../modules/db');
	//Inicializando o Banco de Dados:
	db();
	//Carregando as Rotas:
	routes(app);
	//Mecânismo de Views:
	app.set('view engine', 'ejs');
	//Fazendo o Express Carregar um Diretório (Onde Fica o CSS, JS e etc.)
	app.use(express.static(__dirname + '/../views'));

	//Executando o Server:
	app.listen(8000, function() {
		console.log("localhost:8000");
	});
};