var http = require('http');
var bl = require('bl');

var urls = process.argv.splice(2);

var responses = {};
var responseCount = 0;

function checkAllResponsesAndPrint(i, data) {
	responses[i] = data;
	responseCount++;		
	
	if (responseCount === urls.length) {
		for (var i = 0; i < urls.length; i++) {
			console.log(responses[i]);		
		};
	};
}


urls.forEach(function(url, i) {
	http.get(urls[i], function(resp) {
		resp.setEncoding('utf8');	
		resp.pipe(bl(function(err, data) {
			checkAllResponsesAndPrint(i, data.toString());
		}));

	});	
});
	


