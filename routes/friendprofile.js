var data = require('../data.json');

exports.view = function(req, res){
	data.fb_id = req.params.id;

	var friendName = req.params.id;
	var friends = data.friends;
	var friend;
	var check = false;
	for(var i = 0; i< friends.length; i++)
	{
		if(friendName == friends[i].name)
		{
			friend = friends[i];
			check = true;
			break;
		}
	}

	if(check)
	{
		res.render('friendprofile', friend);
		
	}
	else
	{
		res.render('friendprofile', data);
	}
	
	
};