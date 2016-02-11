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

      $.post("/settings/addTaste/", {"taste": text}, function() {
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
        window.location.href = "/restaurant";
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
});