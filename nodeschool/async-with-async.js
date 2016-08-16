var http = require('http');
var async = require('async');
var bl = require('bl');

var urls = process.argv.splice(2);

async.map(urls, 
	function(url, callback){
		http.get(url, function(response) {
			response.setEncoding('utf8');
			response.pipe(bl(function(err, data) {
				if (err) {
					callback(err, null);
				};
				callback(null, data.toString());
			}));
		})
	}, 
	function(err, mapped){
		mapped.forEach(function(data) {
			console.log(data);
		});			
	}
);



