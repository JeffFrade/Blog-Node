var users = require('../controllers/usersController');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('pages/home');
	});

	app.get('/login', function(req, res) {
		res.render('pages/login');
	});

	app.post('/login', function(req, res){
		users.login(req, res);
	});

	app.get('/frontend', function(req, res){
		app.render('pages/login');
	});

	app.get('/backend', function(req, res){
		app.render('pages/login');
	});
};