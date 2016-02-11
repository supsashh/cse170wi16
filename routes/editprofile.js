var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('editprofile', data);
};

exports.editBio = function(req, res) {
	data.bio = req.body.bio;
	res.send(200);
}