var express = require('express');
var userProvider = require('./userprovider');

var router = express.Router();

function toUsers(req, resp, next) {
	resp.render('users', { users : req.users });
}

function toGetUser(req, resp, next) {
	var userId = req.params.id;
	req.userId = userId;
	next();
}

function toUser(req, resp, next) {
	resp.render('user', { user : req.user});
}

function addUser(req, resp, next) {
	req.userToAdd = req.body;
	next();
}

function toDeleteUser(req, resp, next) {
	var userId = req.params.id;
	var userState = req.params.state;
	req.userId = userId;
	req.userState = userState;
	next();
}

function userDeleted(req, resp, next) {
	resp.json({ success : true});
}

function toEditUser(req, resp, next) {
	req.userToEdit = req.body;
	next();
}

router.get('/', userProvider.getAll, toUsers);

router.get('/:id', toGetUser, userProvider.getUser, toUser);

router.post('/add', addUser, userProvider.addUser, userProvider.getAll, toUsers);

router.delete('/:id/state/:state', toDeleteUser, userProvider.deleteUser, userDeleted);

router.post('/edit/:id/state/:state', toEditUser, userProvider.updateUser, userProvider.getUser, toUser);

module.exports = router;
