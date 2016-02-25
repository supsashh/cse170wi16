var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('addbio', data);
};

exports.addbio = function(req, res) {
	data.bio = req.body.bio;
	res.send(200);
};