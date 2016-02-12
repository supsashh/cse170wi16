var data = require('../data.json');

exports.view = function(req, res){
  var restaurantId = req.params.id; 
  var restaurants = data.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId.localeCompare(restaurants[i].id)){
      restaurant = restaurants[i];
    }
  }
  res.render('menu', restaurant);
};
