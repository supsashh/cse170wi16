
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var portfolio = require('./routes/portfolio');
var restaurant = require('./routes/restaurant');
var profile = require('./routes/profile');
var newsfeed = require('./routes/newsfeed');
var search = require('./routes/search');
var cuisine = require('./routes/cuisine');
var editprofile = require('./routes/editprofile');
var settings = require('./routes/settings');
var friendslist = require('./routes/friendslist');
var comments = require('./routes/comments');
var login = require('./routes/login');
var review = require('./routes/review');

var server = express();

// all environments
server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');
server.use(express.favicon());
server.use(express.logger('dev'));
server.use(express.json());
server.use(express.urlencoded());
server.use(express.methodOverride());
server.use(express.cookieParser('GoTo Secret Key'));
server.use(express.session());
server.use(server.router);
server.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == server.get('env')) {
  server.use(express.errorHandler());
}

// Add routes here
server.get('/', index.view);
server.get('/login', index.viewLogin);
server.get('/portfolio/:title', portfolio.viewPortfolio);
server.get('/restaurant/:id', restaurant.view);
server.get('/profile', profile.view);
server.get('/newsfeed', newsfeed.view);
server.get('/search', search.view);
server.get('/cuisine/:id', cuisine.viewCuisine);
server.get('/editprofile', editprofile.view);
server.post('/editprofile/editBio', editprofile.editBio);
server.get('/settings', settings.view);
server.post('/settings/deleteTaste', settings.deleteTaste);
server.post('/settings/addTaste', settings.addTaste);
server.post('/settings/updateLocation', settings.updateLocation);
server.get('/friendslist', friendslist.view);
server.get('/comments', comments.view);
server.get('/login', login.view);
server.get('/review/:restaurant', review.view);

http.createServer(server).listen(server.get('port'), function(){
  console.log('Express server listening on port ' + server.get('port'));
});
