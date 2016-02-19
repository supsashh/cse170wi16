var data = require('../data.json');

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

	var restaurantId = req.body.restaurant; 
    var restaurants = data.restaurants;
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