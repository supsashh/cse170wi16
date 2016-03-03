var data = require('../data.json');

exports.view = function(req, res){
  var profileObj;
	for (var i = 0; i < data.profileObjs.length; i++) {
		if (data.profileObjs[i].profileId == req.session.profileId) {
	    	profileObj = data.profileObjs[i];
	    }
	}
  var restaurantId = req.params.id; 
  var restaurants = profileObj.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId == restaurants[i].id){
      restaurant = restaurants[i];
    }
  }
  res.render('menu', restaurant);
};
