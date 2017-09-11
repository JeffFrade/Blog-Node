var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
	res.render('pages/home');
});

app.get('/login', function(req, res) {
	res.render('pages/login');
});

app.listen(8000, function() {
	console.log("localhost:8000");
});