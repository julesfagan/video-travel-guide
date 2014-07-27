$(document).ready(function() {
/*
	var request = {tag: topic,
		      pagesize: 10,
		        period: 'all_time'};
*/

	var result = $.ajax({
		url: "http://gdata.youtube.com/feeds/api/videos?alt=json&v=2&q=cars&safeSearch=none&time=all_time&uploader=partner",
		dataType: "json",
		type: "GET",
		})
	.done(function(result){
		/*
		var searchResults = showSearchResults(request.tag, result.items.length);
		$('.search-results').html(searchResults);

		$.each(result.items, function(i, item) {
			var topPerson = showAnswerers(item);
			$('.results').append(topPerson);
		});
		*/
		/* result.feed.entry[0].title.$t */

		var link = result.feed.entry[0].link[0].href;

		$("section iframe").attr("src", link);
	})
	.fail(function(jqXHR, error, errorThrown){
		/*
		var errorElem = showError(error);
		$('.search-results').append(errorElem);
		*/
		alert("There was a problem");
	});
});