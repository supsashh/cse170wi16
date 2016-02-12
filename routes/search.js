var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('search');
};

exports.search = function(req, res) {
	var restaurants = data.restaurants;
	var searchTerm = req.params.term;

	for(var i = 0 ; i < restaurants.length; i++) {
		console.log(restaurants[i].name.toLowerCase() + " " + searchTerm.toLowerCase());
	    if (restaurants[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
	    	console.log(restaurants[i]);
	        return res.json(restaurants[i]);
	    }
	}

	return res.json({});
}
