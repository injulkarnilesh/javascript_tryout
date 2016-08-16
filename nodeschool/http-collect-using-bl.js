var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(resp) {
	resp.setEncoding('utf8');
	
	resp.pipe(bl(function(err, data) {
		if (err) {
			console.error(err);
		};
		var allData = data.toString();
		console.log(allData.length);
		console.log(allData);
	}));

});

