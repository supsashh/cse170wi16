var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('newpost');
};

exports.addpost = function(req, res) {
	data.posts.unshift(req.body);
	res.send(200);
};