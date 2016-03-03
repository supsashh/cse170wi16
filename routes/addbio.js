var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('addbio', data);
};

exports.addbio = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	profileObj.bio = req.body.bio;
	res.send(200);
};