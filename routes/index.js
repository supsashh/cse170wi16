
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  res.render('index', data);
};

exports.viewLogin = function(req, res){
  res.render('login');
};

exports.viewAltLogin = function(req, res){
  res.render('altlogin');
};
