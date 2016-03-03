var data = require('../data.json');

exports.view = function(req, res){
  res.render('profile', data);
};

exports.getBio = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	res.json({"bio": profileObj.bio});
};

exports.getTastes = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	res.json({"tastes": profileObj.myCuisines});
};