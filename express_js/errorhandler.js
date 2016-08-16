module.exports = function(err, req, resp, next) {
	console.error("ERROR", err);
	if (req.xhr) {
		resp.status(500).json({success : false, error : err});
	} else {
		resp.status(500).render('error', { error: err});
	}
}