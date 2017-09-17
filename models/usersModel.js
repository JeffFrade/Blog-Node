var con = require('../modules/db');

module.exports = function() {
	this.login = function(user, senha, res) {
		var db = con();

		return db.query('SELECT COUNT(*) FROM users WHERE `user` = ? AND `password` = ?', [user, senha], function(erro, resultado, campos){
			console.log(resultado[0]['COUNT(*)']);
			if (resultado[0]['COUNT(*)']) {
				res.send('Ok');
			} else {
				res.redirect('/login');
			}
		});
	};

	return this;
};