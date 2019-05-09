"use strict";

var main = function () {
	
	var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
	
	$.getJSON(url, function (flickrResponse) {
		flickrResponse.items.forEach(function (photo) {
		var $img = $("<img>").hide();
		$img.attr("src", photo.media.m);
		$("main .photos").append($img);
		$img.fadeIn();
	});
});
};

$(document).ready(main);