var data = require('../data.json');

exports.view = function(req, res){
	data.fb_id = req.params.id;
	res.render('friendprofile', data);
};