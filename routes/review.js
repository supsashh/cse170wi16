var data = require('../data.json');

exports.view = function(req, res) {
  var restaurantId = req.params.id; 
  var restaurants = data.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId == restaurants[i].id){
      restaurant = restaurants[i];
      var itemId = req.params.item;
      var menu_items = restaurant["menu-items"];
      var menu_item;
      for(var j = 0; j < menu_items.length; j++)
      {
        if(itemId == menu_items[j]["item-id"])
        {
          menu_item = menu_items[j];
          break;
        }
      }
      break;
    }
  }
  res.render('restaurantreview', menu_item);
};
