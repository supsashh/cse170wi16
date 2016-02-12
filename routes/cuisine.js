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
	var restaurants = data.restaurants;
	var cuisineRestaurants = [];
	for (var j = 0; j < restaurants.length; j++) {
		if (restaurants[j].cuisineId == id) {
			console.log(restaurants[j]);
			cuisineRestaurants.push(restaurants[j]);
		}
	}
  res.render('cuisine', {
    cuisine, cuisineRestaurants
  });
};
