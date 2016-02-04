exports.viewPortfolio = function(req, res) {
	var title = req.params.title; 
    console.log("The portfolio title is: " + title);
    res.render('portfolio', {
    'portfolioTitle': title
  });
};