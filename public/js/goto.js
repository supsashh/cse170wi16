

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

      $.post("/settings/deleteTaste/", {"taste": text}, function() {
        taste.remove();
      });
    });

    $(document).on("tap vclick click", ".add-taste-button", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var text = $('#add-taste-input').val();
      var taste = "<div class='taste'><span class='label taste-label'>";
      taste = taste + text + "</span><a class='taste-delete' href='#'>×</a></div>";

      $.post("/settings/addTaste/", {"myCuisines": text}, function() {
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

      if(post_img)
        var is_pic = true;
      else
        var is_pic = false;

      $.post("/newpost/addpost/", { "picture": false,
        "food-image": post_img,
        "name": "John Johnson",
        "profile-image": post_img,
        "restaurant": post_tag,
        "restaurant-description": restaurant_desc }, function() {
          window.location.href= "/newsfeed";
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
      $(this).toggleClass($(this).css('color','red'));
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
          var result = "<div class='panel media'><div class='media-left'><a href='#'><img class='media-object search-result-pic' src='";
          result += "/images/" + response.picture + "'></a></div>";
          result += "<div class='media-body'><h4><a href='/restaurant/" + response.id + "'>";
          result += response.name + "</a></h4></div></div>"
          $('.results-container').append(result);
        }
      });
    });
});
