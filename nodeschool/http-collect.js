var http = require('http');

var url = process.argv[2];
var allData = '';

function collectData(data) {
	allData = allData.concat(data);
}

function printData() {
	console.log(allData.length);
	console.log(allData);
}

http.get(url, function(resp) {
	resp.setEncoding('utf8');
	resp.on('data', collectData);
	resp.on('error', console.error);
	resp.on('end', printData);
});

