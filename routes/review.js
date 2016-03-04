var data = require('../data.json');

exports.menuItems = function(req,res){
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
  var menuItems = restaurant["menu-items"];
  var menuItemNames = [];
  for(var j = 0; j < menuItems.length; j++){
    menuItemNames.push(menuItems[j]["item-name"]);
  }

  res.json(menuItemNames);
};

exports.view = function(req, res) {
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
