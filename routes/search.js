var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('search');
};

exports.search = function(req, res) {
	var restaurants = data.restaurants;
  var cuisines = data.cuisines;
	var searchTerm = req.params.term;
  var foundMenuItems = [];
  var foundMenuItemsRestaurants = [];
  var foundRestaurants = [];
  var foundCuisines = [];

  searchTerm = searchTerm.toLowerCase();
	for(var i = 0 ; i < restaurants.length; i++) {
		var restaurant = restaurants[i].name.toLowerCase();


	  if (restaurant.indexOf(searchTerm) > -1) {
	      foundRestaurants.push(restaurants[i]);
	  }
    var menuItems = restaurants[i]["menu-items"];
    for(var j = 0; j < menuItems.length; j++){
      var menuItem = menuItems[j]["item-name"].toLowerCase();

      if (menuItem.indexOf(searchTerm) > -1) {
  	      foundMenuItems.push(menuItems[j]);
          foundMenuItemsRestaurants.push(restaurants[i]);
  	  }
    }
	}

  for(var k = 0; k < cuisines.length; k++){
    var cuisine = cuisines[k].id.toLowerCase();

	  if (cuisine.indexOf(searchTerm) > -1) {
	      foundCuisines.push(cuisines[k]);
	  }
  }

	return res.json({"cuisines":foundCuisines, "menuItems":foundMenuItems, "menuItemsRestaurants": foundMenuItemsRestaurants, "restaurants":foundRestaurants});
}
