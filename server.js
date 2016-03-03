
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var session = require('express-session');

var index = require('./routes/index');
var portfolio = require('./routes/portfolio');
var restaurant = require('./routes/restaurant');
var profile = require('./routes/profile');
var newsfeed = require('./routes/newsfeed');
var search = require('./routes/search');
var cuisine = require('./routes/cuisine');
var editprofile = require('./routes/editprofile');
var addbio = require('./routes/addbio');
var settings = require('./routes/settings');
var friendslist = require('./routes/friendslist');
var comments = require('./routes/comments');
var login = require('./routes/login');
var tastes = require('./routes/tastes');
var tutorial = require('./routes/tutorial');
var review = require('./routes/review');
var friendProfile = require('./routes/friendprofile');
var menu = require('./routes/menu');
var newpost = require('./routes/newpost');


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
server.use(session({
  secret: 'starfriends',
  resave: false,
  saveUninitialized: true
}))


// development only
if ('development' == server.get('env')) {
  server.use(express.errorHandler());
}

// Add routes here
server.get('/', index.viewLogin);
server.get('/index', index.view);
server.get('/altlogin', index.viewAltLogin);
server.get('/portfolio/:title', portfolio.viewPortfolio);
server.get('/restaurant/:id', restaurant.view);
server.get('/restaurant/:id/menu', menu.view);
server.get('/restaurant/:id/menu#:item-id', menu.view);
server.post('/restaurant/addFavorite', restaurant.addFavorite);
server.post('/restaurant/removeFavorite', restaurant.removeFavorite);
server.get('/profile', profile.view);
server.get('/profile/getBio', profile.getBio);
server.get('/profile/getTastes', profile.getTastes);
server.get('/newsfeed', newsfeed.view);
server.post('/newpost/addpost', newpost.addpost);
server.get('/search', search.view);
server.get('/search/:term', search.search);
server.get('/cuisine/:id', cuisine.viewCuisine);
server.get('/addbio', addbio.view);
server.post('/addbio/addbio', addbio.addbio);
server.get('/editprofile', editprofile.view);
server.get('/editprofile/getBio', editprofile.getBio);
server.get('/editprofile/getTastes', editprofile.getTastes);
server.post('/editprofile/editBio', editprofile.editBio);
server.post('/editprofile/deleteTaste', editprofile.deleteTaste);
server.post('/editprofile/addTaste', editprofile.addTaste);
server.get('/settings', settings.view);
server.post('/settings/updateLocation', settings.updateLocation);
server.get('/settings/getLocation', settings.getLocation);
server.get('/friendslist', friendslist.view);
server.get('/comments/:id', comments.view);
server.get('/login', login.view);
server.post('/login/profileId', login.profileId);
server.get('/tastes', tastes.view);
server.get('/alttastes',tastes.viewAlt);
server.post('/tastes/addTastes', tastes.addTastes);
server.get('/tutorial', tutorial.view);
server.get('/review/:id/:item', review.view);
server.get('/profile/:id', friendProfile.view);
server.get('/newpost/:id', newpost.view);
server.get('/newpost/r/r/r', newpost.restaurants);
server.post('/comments/newcomment/:id', comments.newcomment);
server.get('/review/r/r/r/:id', review.menuItems);

http.createServer(server).listen(server.get('port'), function(){
  console.log('Express server listening on port ' + server.get('port'));
});
