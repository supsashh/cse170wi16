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

  if(!restaurant){
    res.status(404).render('norestaurant', {title: "Sorry, page not found"});
    return;
  }

  // Search for Your GoTo List portfolio
  var portfolios = data.portfolios;
  var yourGoToList;
  for(var i = 0; i < portfolios.length; i++){
    if("Your GoTo List" == portfolios[i].title){
      yourGoToList = portfolios[i].images;
      break;
    }
  }

  // Check if the restaurant is in Your GoTo List
  var favorite = false;
  for(var i = 0; i < yourGoToList.length; i++){
    if(restaurantId == yourGoToList[i]["restaurant-id"]) {
      favorite = true;
    }
  }

  restaurant["favorite"] = favorite;

  res.render('restaurant', restaurant);
};




exports.addFavorite = function(req, res) {
  var restaurantId = req.body.restaurantId;
  var restaurants = data.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId == restaurants[i].id){
      restaurant = restaurants[i];
      break;
    }
  }

  // Search for Your GoTo List portfolio
  var portfolios = data.portfolios;
  var yourGoToList;
  for(var i = 0; i < portfolios.length; i++){
    if("Your GoTo List" == portfolios[i].title){
      yourGoToList = portfolios[i];
      break;
    }
  }

  // Check if the restaurant is in Your GoTo List already
  var added;
  for (var i = 0; i < yourGoToList.images.length; i++) {
    if (yourGoToList.images[i]["restaurant-id"] == restaurantId) {
      added = true;
      break;
    }
  }

  // If the restauraunt is not in Your Goto List, get the restaurant image and add it to Your GoTo List
  if (!added) {
    var image = {};
    image["image"] = restaurant["picture"];
    image["restaurant-id"] = restaurantId;
    image["restaurant-name"] = restaurant["name"];
    yourGoToList.images.push(image);
  }

  res.send(200);
};



exports.removeFavorite = function(req, res) {
  var restaurantId = req.body.restaurantId;
  var restaurants = data.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId == restaurants[i].id){
      restaurant = restaurants[i];
      break;
    }
  }

  // Search for Your GoTo List portfolio
  var portfolios = data.portfolios;
  var yourGoToList;
  for(var i = 0; i < portfolios.length; i++){
    if("Your GoTo List" == portfolios[i].title){
      yourGoToList = portfolios[i].images;
      break;
    }
  }

  // Find the restaurant menu item image and remove it
  var index;
  for(var i = 0; i < yourGoToList.length; i++){
    if(restaurantId == yourGoToList[i]["restaurant-id"]){
      index = i;
      break;
    }
  }
  yourGoToList.splice(index, 1);

  res.send(200);
};
