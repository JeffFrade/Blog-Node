var users = require('../models/usersModel')();
var md5 = require('md5');

module.exports.login = function(req, res) {
	//Pegando os Dados:
	var dados = req.body;
	//Atribuindo os Dados as Variáveis:
	var user = dados['usuario'];
	var senha = md5(dados['senha']);
	//Método de Login:
	users.login(user, senha, res);
};