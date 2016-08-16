var fs = require('fs');
var fileToRead = process.argv[2];
if (fileToRead) {
	//var fileContent = fs.readFileSync(fileToRead).toString();
	var fileContent = fs.readFileSync(fileToRead, 'utf8');
	var lines = fileContent.split('\n');
	console.log(lines.length - 1);
};
