var data = require('../data.json');

exports.view = function(req, res) { 
	res.render('settings', data);
};

exports.updateLocation = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	profileObj.location = req.body.location;
	res.send(200);
};

exports.getLocation = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	
	var location;
	if (profileObj.location) {
		location = profileObj.location;
	}
	else {
		location = "Location has not been added yet.";
	}
	res.json({"location": location});
}