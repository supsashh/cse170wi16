

$(document).ready(function() {
    $('.portfolio').each(function(index, obj) {
    	var p = $(this).portfolio();
    	p.init();
    });

    $('.restaurant-image').on('tap vclick click', function() {
    	window.location.href = $(this).data("url");
    });

    $('.cuisine-image').on('tap vclick click', function() {
    	window.location.href = $(this).data("url");
    });

    $(document).on("tap vclick click", ".taste-delete", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var taste = $(this).closest('.taste');
      var text = taste.find('.taste-label').text();

      $.post("/editprofile/deleteTaste/", {"taste": text}, function() {
        taste.remove();
      });
    });

    $(document).on("tap vclick click", ".add-taste-button", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var text = $('#add-taste-input').val();
      var taste = "<div class='taste'><span class='label taste-label'>";
      taste = taste + text + "</span><a class='taste-delete' href='#'>×</a></div>";

      $.post("/editprofile/addTaste/", {"taste": text}, function() {
        $('.tastes').append(taste);
        $('#add-taste-input').val("");
        $('#add-taste-input').blur();
      });
    });

    $('.update-location-button').on('tap vclick click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var location = $('#update-location-input').val();

      $.post("/settings/updateLocation/", {"location": location}, function() {
        $('#location').text(location);
        $('#update-location-input').val("");
        $('#update-location-input').blur();
      });
    });

    $('.edit-bio-button').on('tap vclick click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var bio = $('#edit-bio').val();

      $.post("/editprofile/editBio/", {"bio": bio}, function() {
        window.location.href = "/profile";
      });
    });

    $('#submitpost').on('tap vclick click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var post_tag = $('#restaurant_tag').val();
      var restaurant_desc = $('#post_description').val();
      var post_img = $('#pic').val();

      var postpath = window.location.pathname;
      var strArr = postpath.split("/");
      var postId = parseInt(strArr[strArr.length - 1]);
      postId = postId + 1;

      $.post("/newpost/addpost/", { "id": postId,
        "food-image": post_img,
        "name": "John Johnson",
        "profile-image": "profile-icon.png",
        "restaurant": post_tag,
        "restaurant-description": restaurant_desc,
        "comments": [ {
          "commenter": "John Johnson",
          "commenter-image": "profile-icon.png",
          "text": restaurant_desc } ]
         }, function() {
          window.location.href= "/newsfeed";
      });
    });

    $('.commentsend').on('tap vclick click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var comment_text = $('#addcomment').val();
        var postpath = window.location.pathname;
        var strArr = postpath.split("/");
        var postId = strArr[strArr.length - 1];
        var code = "<li class='media'><a class='pull-left' href='#''>" +
              "<img class='media-object img-circle' src='/images/profile-icon.png' alt='profile'>" +
              "</a><div class='media-body'><div class='well well-sm'>" +
              "<h4 class='media-heading reviews'>John Johnson</h4>" +
              "<p class='media-comment'>";
        code = code + comment_text + "</p></div></div></li>";


        $.post("/comments/newcomment/"+postId, { "commenter": "John Johnson",
          "commenter-image": "profile-icon.png",
          "text": comment_text
          }, function() {
            $('.media-list').append(code);
            $('#addcomment').val("");
            $('#addcomment').blur();
          });
    });

    $('.review-rate-dish').hide();
    $('.review-ambiance').hide();
    $('.review-return').hide();
    $('.review-done').hide();
    $('.review-continue-button').on('tap vclick click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).closest('.review').hide();
      var next = $(this).data("continue");
      if (next) {
        $('.' + next).show();
      }
      else {
        var pathname = window.location.pathname;
        var strArray = pathname.split("/");
        var restaurantId = strArray[strArray.length - 1];
        window.location.href = "/restaurant/"+restaurantId;
      }
    });

    $('.review-back-button').on('tap vclick click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('.review-rate-dish').hide();
      $(this).closest('.review').hide();
      var back = $(this).data("back");
      if (back) {
        $('.' + back).show();
      }
    });

    $(document).on("tap vclick click", ".mycuisine", function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).toggleClass("highlight");
    });


    $(document).on("tap vclick click", ".glyphicon-heart", function(event) {
      event.preventDefault();
      event.stopPropagation();
      if($(this).hasClass('hearted'))
      {
        $(this).removeClass('hearted');
      }
      else
      {
        $(this).addClass('hearted');
      }
    });

    $('#intro-tastes-button').click(function() {
      event.preventDefault();
      event.stopPropagation();
      var tastes = [];
      $('.mycuisine.highlight').each(function() {
        console.log("Adding " + $(this).find('.taste-label').text());
        tastes.push($(this).find('.taste-label').text());
      });
      console.log(tastes);

      $.post("/tastes/addTastes/", {"tastes": tastes}, function() {
        window.location.href = "/";
      });

    });

    $('.search-button').click(function() {
      event.preventDefault();
      event.stopPropagation();
      var searchTerm = $('#search-input').val();

      $.get("/search/" + searchTerm, function(response) {
        $('.results-container').empty();
        console.log(response.length);
        if (jQuery.isEmptyObject(response)) {
          $('.results-container').append("<p class='text-center'>No results found</p>");
        }
        else {
          console.log(response);
          if(response.restaurants.length > 0){
            var result = "<h3>Restaurants</h3>";
            for(var i = 0; i < response.restaurants.length; i++){
              result += "<div class='panel media'><div class='media-left'><a href='#'><img class='media-object search-result-pic' src='";
              result += "/images/" + response.restaurants[i].picture + "'></a></div>";
              result += "<div class='media-body'><h4><a href='/restaurant/" + response.restaurants[i].id + "'>";
              result += response.restaurants[i].name + "</a></h4></div></div>"
            }
            $('.results-container').append(result);
          }

          if(response.menuItems.length > 0){
            var result2 = "<h3>Menu Items</h3>";
            for(var j = 0; j < response.menuItems.length; j++){
              result2 += "<div class='panel media'><div class='media-left'><a href='#'><img class='media-object search-result-pic' src='";
              result2 += "/images/" + response.menuItems[j]["item-image"] + "'></a></div>";
              result2 += "<div class='media-body'><h4><a href='/restaurant/" + response.menuItemsRestaurants[j].id + "/menu#" + response.menuItems[j]["item-id"]+ "'>";
              result2 += response.menuItems[j]["item-name"] + " (" + response.menuItemsRestaurants[j].name + ")</a></h4></div></div>"
            }
            $('.results-container').append(result2);
          }

          if(response.cuisines.length > 0){
            var result3 = "<h3>Cuisines</h3>";
            for(var k = 0; k < response.cuisines.length; k++){
              if(response.cuisines[k].image.length > 0){
                result3 += "<div class='panel media'><div class='media-left'><a href='#'><img class='media-object search-result-pic' src='";
                result3 += "/images/" + response.cuisines[k].image + "'></a></div>";
                result3 += "<div class='media-body'><h4><a href='/cuisine/" + response.cuisines[k].id + "'>";
                result3 += response.cuisines[k].id + "</a></h4></div></div>"
              }else{
                result3 += "<div class='panel media'>";
                result3 += "<div class='media-body'><h4><a href='/cuisine/" + response.cuisines[k].id + "'>";
                result3 += response.cuisines[k].id + "</a></h4></div></div>"
              }
            }
            $('.results-container').append(result3);
          }
        }
      });
    });

    $('#add-favorite').on("tap vclick click", function() {
      event.preventDefault();
      event.stopPropagation();
      $(this).find('i').toggleClass("glyphicon-star-empty glyphicon-star");

      var pathname = window.location.pathname;
      var strArray = pathname.split("/");
      var restaurantId = strArray[strArray.length - 1];
      $.post("/restaurant/addFavorite", {"restaurantId": restaurantId}, function() {

      });
    });

    $('#remove-favorite').on("tap vclick click", function() {
      event.preventDefault();
      event.stopPropagation();
      $(this).find('i').toggleClass("glyphicon-star-empty glyphicon-star");

      var pathname = window.location.pathname;
      var strArray = pathname.split("/");
      var restaurantId = strArray[strArray.length - 1];
      $.post("/restaurant/removeFavorite", {"restaurantId": restaurantId}, function() {

      });
    });

    $('#address').on("tap vclick click", function() {
      event.preventDefault();
      event.stopPropagation();
      var address = this.innerHTML;
      address = address.replace(/ /g, "+");
      googleURL = "https://google.com/maps/search/"+address;
      window.open(googleURL,"_blank");
    });
});
