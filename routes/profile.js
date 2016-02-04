exports.view = function(req, res){
  res.render('profile', {
  	'image': 'profile-icon.png',
  	'name': 'John Doe',
  	'restaurant1': '@ShikuSushi',
  	'restaurant1-description': 'The jewel roll was amazing!',
  	'food-image': 'jewel-roll.jpg',
  	'restaurant2': '@BreakfastRepublic',
  	'restaurant2-description': 'Get the flight of pancakes!'
  });
};