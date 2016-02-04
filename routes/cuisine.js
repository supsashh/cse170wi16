exports.viewCuisine = function(req, res) {
	var id = req.params.id; 
    console.log("The cuisine id is: " + id);
    res.render('cuisine', {
    'cuisineId': id
  });
};