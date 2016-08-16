var express = require('express');

var router = express.Router();

router.get('/hello', function(req, resp) {
	resp.send('Hello Express');
});

router.get('/hello/:name', function(req, resp) {
	resp.send('HELLO ' + req.params.name);
});

module.exports = router;