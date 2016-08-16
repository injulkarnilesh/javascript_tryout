var fs = require('fs');
var path = require('path');

function fileNames(dir, ext, callBack) {
	fs.readdir(dir, function(err, list) {
		if(err) {
			callBack(err);
		} else {
			var match = [];
			list.forEach(function(fileName){
				if('.' + ext === path.extname(fileName)) {
					match.push(fileName);
				}
			});
			callBack(null, match);
		}
	})
}

module.exports = fileNames;