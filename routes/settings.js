var data = require('../data.json');

exports.view = function(req, res) { 
	res.render('settings', data);
};

exports.deleteTaste = function(req, res) {
	var tastes = data.myCuisines;
	var index = tastes.indexOf(req.body.taste);
	if (index > -1) {
		tastes.splice(index, 1);
	}
	res.send(200);
};

exports.addTaste = function(req, res) {
	data.myCuisines.push(req.body.taste);
	res.send(200);
};

exports.updateLocation = function(req, res) {
	data.location = req.body.location;
	res.send(200);
};