var data = require('../data.json');

exports.view = function(req, res){
  res.render('login');
};

exports.profileId = function(req, res) {
	var id = req.body.id;
	req.session.profileId = id;

	var profileObjCreated = false;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId === id) {
			profileObjCreated = true;
		}
	}

	if (!profileObjCreated) {
		var newObj = (JSON.parse(JSON.stringify(data.profileObjs[0])));
		newObj.profileId = id;
		data.profileObjs.push(newObj);
	}

	//console.log(data.profileObjs);
	res.send(200);
}