var con = require('../modules/db');

module.exports = function() {
	this.login = function(user, senha, res) {
		var db = con();

		return db.query('SELECT COUNT(*) FROM users WHERE `user` = ? AND `password` = ?', [user, senha], function(erro, resultado, campos){
			if (resultado[0]['COUNT(*)']) {
				res.render('pages/intranet');
			} else {
				res.render('pages/login', {erro:'Usuário ou Senha Incorretos.', attr:'alert alert-danger alert-dimissible'});
			}
		});
	};

	return this;
};