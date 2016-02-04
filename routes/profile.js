exports.view = function(req, res){
  res.render('profile', {
  	'image': 'profile-icon.png',
  	'name': 'John Doe',

  });
};