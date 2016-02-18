var data = require('../data.json');

exports.view = function(req, res) { 
	res.render('settings', data);
};

exports.updateLocation = function(req, res) {
	data.location = req.body.location;
	res.send(200);
};