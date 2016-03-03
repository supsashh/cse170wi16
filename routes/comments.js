var data = require('../data.json');

exports.view = function(req, res) { 
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
  var postId = req.params.id; 
  var posts = profileObj.posts;
  var post;
  for(var i = 0; i < posts.length; i++){
    if(postId == posts[i].id){
      post = posts[i];
      break;
    }
  }
  res.render('comments', post);
};

exports.newcomment = function(req, res) {
  var profileObj;
  for (var i = 0; i < data.profileObjs.length; i++) {
    if (data.profileObjs[i].profileId == req.session.profileId) {
      profileObj = data.profileObjs[i];
    }
  }
  var postId = req.params.id; 
  var posts = profileObj.posts;
  var post;
  for(var i = 0; i < posts.length; i++){
    if(postId == posts[i].id){
      profileObj.posts[i].comments.push(req.body);
      break;
    }
  }
  res.send(200);
}