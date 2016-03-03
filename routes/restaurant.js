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
      break;
    }
  }

  if(!restaurant){
    res.status(404).render('norestaurant', {title: "Sorry, page not found"});
    return;
  }

  // Check if the restaurant is in Your GoTo List
  var favorite = false;
  for(var i = 0; i <  profileObj.goToList.images.length; i++){
    if(restaurantId == profileObj.goToList.images[i]["restaurant-id"]) {
      favorite = true;
    }
  }

  restaurant["favorite"] = favorite;

  res.render('restaurant', restaurant);
};




exports.addFavorite = function(req, res) {
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
  var restaurantId = req.body.restaurantId;
  var restaurants = profileObj.restaurants;
  var restaurant;
  for(var i = 0; i < restaurants.length; i++){
    if(restaurantId == restaurants[i].id){
      restaurant = restaurants[i];
      break;
    }
  }

  // Check if the restaurant is in Your GoTo List already
  var added;
  for (var i = 0; i < profileObj.goToList.images.length; i++) {
    if (profileObj.goToList.images[i]["restaurant-id"] == restaurantId) {
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
    profileObj.goToList.images.push(image);
  }

  res.send(200);
};



exports.removeFavorite = function(req, res) {
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
  var restaurantId = req.body.restaurantId;

  // Find the restaurant menu item image and remove it
  var index;
  for(var i = 0; i < profileObj.goToList.images.length; i++){
    if(restaurantId == profileObj.goToList.images[i]["restaurant-id"]){
      index = i;
      break;
    }
  }
  profileObj.goToList.images.splice(index, 1);

  res.send(200);
};
