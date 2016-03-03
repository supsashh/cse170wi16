var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('tastes', data);
};

exports.addTastes = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	profileObj.myCuisines = req.body.tastes;
	console.log(data.profileObjs);
	res.send(200);
};

exports.viewAlt = function(req, res) {
	res.render('alttastes', data);
};