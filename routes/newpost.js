var data = require('../data.json');

exports.restaurants = function(req, res){
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
  var restaurants = profileObj.restaurants;
  var restaurantNames = [];
  for(var i = 0; i < restaurants.length; i++){
    restaurantNames.push(restaurants[i].id);
  }

  res.json(restaurantNames);
};

exports.view = function(req, res) { 
  res.render('newpost');
};

exports.addpost = function(req, res) {
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
	profileObj.posts.unshift(req.body);

	if (profileObj["profile-posts"]) {
		profileObj["profile-posts"].push(req.body);
	}
	else {
		profileObj["profile-posts"] = [];
		profileObj["profile-posts"].push(req.body);
	}

	var restaurantId = req.body.restaurant; 
    var restaurants = profileObj.restaurants;
    var restaurant;
    for(var i = 0; i < restaurants.length; i++){
      if(restaurantId == restaurants[i].id){
        restaurant = restaurants[i];
        if (restaurant["posts"]) {
			restaurant["posts"].unshift(req.body);
		}
		else {
			restaurant["posts"] = [];
			restaurant["posts"].push(req.body);
		}
        break;
      }
    }

	res.send(200);
};
