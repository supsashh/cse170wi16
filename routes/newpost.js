var data = require('../data.json');

exports.restaurants = function(req, res){
  var restaurants = data.restaurants;
  var restaurantNames = [];
  for(var i = 0; i < restaurants.length; i++){
    restaurantNames.push(restaurants[i].id);
  }
  console.log(restaurantNames);
  res.json(restaurantNames);
};

exports.view = function(req, res) { 
  res.render('newpost');
};

exports.addpost = function(req, res) {
	data.posts.unshift(req.body);

	if (data["profile-posts"]) {
		data["profile-posts"].push(req.body);
	}
	else {
		data["profile-posts"] = [];
		data["profile-posts"].push(req.body);
	}

	res.send(200);
};
