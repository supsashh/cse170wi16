var data = require('../data.json');

exports.view = function(req, res) { 
  var postId = req.params.id; 
  var posts = data.posts;
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
  var postId = req.params.id; 
  var posts = data.posts;
  var post;
  for(var i = 0; i < posts.length; i++){
    if(postId == posts[i].id){
      data.posts[i].comments.push(req.body);
      break;
    }
  }
  res.send(200);
}