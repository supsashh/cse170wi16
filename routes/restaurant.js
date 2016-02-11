var data = require('../data.json');

exports.view = function(req, res){
  var id = req.params.id; 
  var restaurants = data.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(id.localCompare(restaurants[i].id)){
      restaurant = restaurants[i];
    }
  }
  res.render('restaurant', restaurant);
};
