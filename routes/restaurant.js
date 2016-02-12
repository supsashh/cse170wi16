var data = require('../data.json');

exports.view = function(req, res){
  var restaurantId = req.params.id; 
  var restaurants = data.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId == restaurants[i].id){
      restaurant = restaurants[i];
      break;
    }
  }
  res.render('restaurant', restaurant);
};
