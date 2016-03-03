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

exports.viewGoTo = function(req, res) {
    var profileObj;
    for (var i = 0; i < data.profileObjs.length; i++) {
        if (data.profileObjs[i].profileId == req.session.profileId) {
            profileObj = data.profileObjs[i];
        }
    }

    res.render('portfolio', {
        'portfolioTitle': profileObj.goToList.title,
        'portfolio': profileObj.goToList
    });
};