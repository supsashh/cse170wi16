var data = require('../data.json');

exports.viewCuisine = function(req, res) {
	var id = req.params.id; 
	var cuisines = data.cuisines;
	var cuisine;
	for (var i = 0; i < cuisines.length; i++) {
		if (cuisines[i].id === id) {
			cuisine = cuisines[i];
		}
	}
	var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
	    	profileObj = data.profileObjs[i];
	    }
	}

	var restaurants = profileObj.restaurants;
	var cuisineRestaurants = [];
	for (var j = 0; j < restaurants.length; j++) {
		if (restaurants[j].cuisineId == id) {
			cuisineRestaurants.push(restaurants[j]);
		}
	}
  res.render('cuisine', {"cuisine":cuisine, "cuisineRestaurants":cuisineRestaurants});
};

exports.cuisineIds = function(req, res){
	var cuisines = data.cuisines;
	var cuisineIds = [];
	for(var i = 0; i < cuisines.length; i++){
		cuisineIds.push(cuisines[i].id);
	}
	res.json(cuisineIds);
};
