var data = require('../data.json');

exports.viewPortfolio = function(req, res) {
	var title = req.params.title; 
    var portfolios = data.portfolios;
    var currentPortfolio;
    for (var i = 0; i < portfolios.length; i++) {
    	if (portfolios[i].title === title) {
    		currentPortfolio = portfolios[i];
    		console.log(currentPortfolio);
    	}
    }

    res.render('portfolio', {
		'portfolioTitle': title,
		'portfolio': currentPortfolio
	});
};