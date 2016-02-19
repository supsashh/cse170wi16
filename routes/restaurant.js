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

  // Get the first menu item image and add it to the images in Your GoTo List portfolio
  var image = {};
  image["image"] = restaurant["picture"];
  image["restaurant-id"] = restaurantId;
  image["restaurant-name"] = restaurant["name"];
  yourGoToList.images.push(image);

  console.log(data);

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
