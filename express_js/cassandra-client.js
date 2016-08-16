var cassandra = require('cassandra-driver');

var client = new cassandra.Client({ contactPoints : [ '127.0.0.1' ]});
client.connect(function(err, conn) {
	if (err) {
		console.error('Can not connect to casssandra', err);
	};
	console.log('Cassandra connected', conn);
});

module.exports =  { 
	client : client, 
	types : cassandra.types
};