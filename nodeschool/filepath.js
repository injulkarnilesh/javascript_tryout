var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dirName, function(err, files) {
	if (!err) {
		files.forEach(function(fileName) {
			if(path.extname(fileName) === ext) {
				console.log(fileName);
			}
		})
	};
})
