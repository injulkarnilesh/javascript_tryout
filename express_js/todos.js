var express = require('express');

var router = express.Router();

var toDoItems = [
	{ id : 0, desc : 'Read Richard Branson Autobiography' },
	{ id : 1, desc : 'Code NodeJs' },
	{ id : 2, desc : 'Watch House Of Cards' }
];

router.get('/', function(req, resp) {
	var model = {
		title : 'Nils App',
		tasks : toDoItems	
	};
	
	resp.render('index', model);
});

router.post('/add', function(req, resp) {
	var newTask = req.body.newtask;
	toDoItems.push({
		id : toDoItems.length + 1,
		desc : newTask
	});
	resp.redirect('/');
});

module.exports = router;