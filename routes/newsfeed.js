var data = require('../data.json');

exports.view = function(req, res) {
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
	res.render('newsfeed', profileObj);
};
