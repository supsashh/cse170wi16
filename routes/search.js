var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('search', data);
};

exports.search = function(req, res) {
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
	var restaurants = profileObj.restaurants;
  var cuisines = data.cuisines;
	var searchTerm = req.params.term;
  var foundMenuItems = [];
  var foundMenuItemsRestaurants = [];
  var foundRestaurants = [];
  var foundCuisines = [];

  searchTerm = searchTerm.toLowerCase();
	for(var i = 0 ; i < restaurants.length; i++) {
		var restaurant = restaurants[i].name.toLowerCase();


	  if (restaurant.indexOf(searchTerm) > -1 || searchTerm.indexOf(restaurant) > -1) {
	      foundRestaurants.push(restaurants[i]);
	  }
    var menuItems = restaurants[i]["menu-items"];
    for(var j = 0; j < menuItems.length; j++){
      var menuItem = menuItems[j]["item-name"].toLowerCase();

      if (menuItem.indexOf(searchTerm) > -1 || searchTerm.indexOf(menuItem) > -1) {
  	      foundMenuItems.push(menuItems[j]);
          foundMenuItemsRestaurants.push(restaurants[i]);
  	  }
    }
	}

  for(var k = 0; k < cuisines.length; k++){
    var cuisine = cuisines[k].id.toLowerCase();

	  if (cuisine.indexOf(searchTerm) > -1 || searchTerm.indexOf(cuisine) > -1) {
	      foundCuisines.push(cuisines[k]);
	  }
  }

	return res.json({"cuisines":foundCuisines, "menuItems":foundMenuItems, "menuItemsRestaurants": foundMenuItemsRestaurants, "restaurants":foundRestaurants});
}
