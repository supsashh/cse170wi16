var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('search');
};

exports.search = function(req, res) {
	var restaurants = data.restaurants;
	var searchTerm = req.params.term;

	for(var i = 0 ; i < restaurants.length; i++) {
		var restaurant = restaurants[i].name.toLowerCase();
		var searchTerm = searchTerm.toLowerCase();
	
	    if (restaurant.indexOf(searchTerm) > -1) {
	        return res.json(restaurants[i]);
	    }
	}

	return res.json({});
}
