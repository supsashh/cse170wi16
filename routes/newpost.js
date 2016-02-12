var data = require('../data.json');

exports.view = function(req, res) { 
  res.render('newpost');
};

exports.addpost = function(req, res) {
	data.posts.unshift({
        "picture": req.body.is_pic,
        "food-image": req.body.post_img,
        "name": "John Johnson",
        "profile-image": req.body.post_img,
        "restaurant": req.body.post_tag,
        "restaurant-description": req.body.restaurant_desc
    });
	res.send(200);
};