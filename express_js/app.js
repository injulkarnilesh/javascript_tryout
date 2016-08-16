var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


//get app
var app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//define middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser());


//define routes
app.use('/api', require('./hellos'));
app.use(require('./todos'));
app.use('/users', require('./users'));

app.use(require('./errorhandler'));

//start app
app.listen(9000, function() {
	console.log('Listening on 9000');
});