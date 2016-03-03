
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  res.render('index', data);
};

exports.viewLogin = function(req, res){
  res.render('login');
};

exports.viewAltLogin = function(req, res){
  res.render('altlogin');
};

exports.getGoToList = function(req, res) {
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
	    	profileObj = data.profileObjs[i];
	    }
	}

	res.json({"goToList": profileObj.goToList});
};