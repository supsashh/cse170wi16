var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('tastes', data);
};

exports.addTastes = function(req, res) {
	console.log(req.body.tastes);
	data.myCuisines = req.body.tastes;
	res.send(200);
};

exports.viewAlt = function(req, res) {
	res.render('alttastes', data);
};