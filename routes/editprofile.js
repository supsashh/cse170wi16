var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('editprofile', data);
};

exports.editBio = function(req, res) {
	data.bio = req.body.bio;
	res.send(200);
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
	console.log(data.myCuisines);
	res.send(200);
};