var fileNames = require('./filenames');

var dir = process.argv[2];
var ext = process.argv[3];

fileNames(dir, ext, function(err, list) {
	if(!err) {
		list.forEach(function(fileName) {
			console.log(fileName);
		}); 
	}
});

