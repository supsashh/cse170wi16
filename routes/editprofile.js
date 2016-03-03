var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('editprofile', data);
};

exports.editBio = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	profileObj.bio = req.body.bio;
	console.log(data.profileObjs);

	res.send(200);
};

exports.getBio = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	res.json({"bio": profileObj.bio});
}

exports.getTastes = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	res.json({"tastes": profileObj.myCuisines});
}

exports.deleteTaste = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	var tastes = profileObj.myCuisines;
	var index = tastes.indexOf(req.body.taste);
	if (index > -1) {
		tastes.splice(index, 1);
	}

	console.log(data.profileObjs);
	res.send(200);
};

exports.addTaste = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
			profileObj = data.profileObjs[i];
		}
	}
	if (profileObj.myCuisines) {
		profileObj.myCuisines.push(req.body.taste);
	}
	else {
		profileObj.myCuisines = [];
		profileObj.myCuisines.push(req.body.taste);
	}	
	
	console.log(data.profileObjs);
	res.send(200);
};