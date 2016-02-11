var data = require('../data.json');

exports.view = function(req, res) {
    res.render('restaurantreview', {
	    'restaurant': req.params.restaurant
	  });
};