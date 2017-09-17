module.exports = function() {
	//Express.js:
	var express = require('express');
	//App:
	var app = express();
	//Rotas:
	var routes = require('../modules/routes');
	var bodyParser = require('body-parser');
	//Configurando o body-parser:
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	//Mecânismo de Views:
	app.set('view engine', 'ejs');
	//Fazendo o Express Carregar um Diretório (Onde Fica o CSS, JS e etc.)
	app.use(express.static(__dirname + '/../views'));
	//Carregando as Rotas:
	routes(app);

	//Executando o Server:
	app.listen(8000, function() {
		console.log("localhost:8000");
	});
};