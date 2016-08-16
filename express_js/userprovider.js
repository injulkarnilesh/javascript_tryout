var cassandra = require('./cassandra-client');

var GET_ALL_USERS = 'select * from injulkar.users'
var GET_USER_BY_ID = 'select * from injulkar.users where id = ? allow filtering';
var ADD_USER = 'insert into injulkar.users(id, first_name, last_name, age, city, state) values (?, ?, ?, ?, ?, ?)';
var DELETE_USER = 'delete from injulkar.users where id = ? and state = ?';
var UPDATE_USER = 'update injulkar.users set first_name = ?, last_name = ?, age = ?, city = ? where id = ? and state = ?';

var userProvider = {
	getAll : function(req, resp, next) {
		cassandra.client.execute(GET_ALL_USERS, function(err, result) {
			if(err) {
				next(err);
			} else {
				req.users = result.rows;
			}
			next();
		});
	},
	getUser : function(req, resp, next) {
		cassandra.client.execute(GET_USER_BY_ID, [req.userId], function(err, result) {
			if(err) {
				next(err);
			} else {
				req.user = result.rows[0];
			}
			next();
		});
	},
	addUser : function(req, resp, next) {
		var user = req.userToAdd;
		var id = cassandra.types.uuid();
	
		cassandra.client.execute(ADD_USER, [
				id,
				user.first_name,
				user.last_name,
				parseInt(user.age),
				user.city,
				user.state
			],  
			{ prepare : true },
			function(err, result) {
				if(err) {
					next(err);
				} else {
					console.log('User added ', user);
				}
				next();		
			});
	},

	deleteUser : function(req, resp, next) {
		var userId = req.userId;
		var userState = req.userState;
		cassandra.client.execute(DELETE_USER, [userId, userState], 
			function(err, result) {
				if(err) {
					next(err);
				} else {
					console.log('User deleted ', userId, userState);
				}
				next();		
			});
	},

	updateUser : function(req, resp, next) {
		var user = req.userToEdit;
		cassandra.client.execute(UPDATE_USER, [
				user.first_name,
				user.last_name,
				parseInt(user.age),
				user.city,
				user.id,
				user.state
			],
			{ prepare : true }, 
			function(err, result) {
				if(err) {
					next(err);
				} else {
					console.log('User updated ', user);
				}
				req.userId = user.id; 
				next();		
			});

	}

};

module.exports = userProvider;
