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
      $(this).closest('.taste').remove();
    });

    $(document).on("tap vclick click", ".add-taste-button", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var text = $('#add-taste-input').val();
      var taste = "<div class='taste'><span class='label taste-label'>";
      taste = taste + text + "</span><a class='taste-delete' href='#'>×</a></div>";
      $('.tastes').append(taste);
      $('#add-taste-input').val("");
      $('#add-taste-input').blur();
    });

    $('.update-location-button').on('tap vclick click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var location = $('#update-location-input').val();
      $('#location').text(location);
      $('#update-location-input').val("");
      $('#update-location-input').blur();
    });

    $(document).on("tap vclick click", ".mycuisine", function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).toggleClass("highlight");
    });
});