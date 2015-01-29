$(document).ready(function(){

// ajax solution
// function getMovieTitle(movie){
// 		$.ajax({
// 			url:"http://www.omdbapi.com/?t=" + movie,
// 			success: function(data){
// 				var movie = JSON.parse(data);
// 				console.log(movie.Title);
// 				var titleName = $("<p>").text(movie.Title);
// 				$("body").append(titleName);
// 			}
// 		});	
// 	}

//getJSON solution
function getMovieTitle(movie){
	$.getJSON("http://www.omdbapi.com/?t=" + movie, function(data){
		var titleName = $("<p>").text(data.Title);
		$("body").append(titleName);
		$("p").parent().append("<button>See Movie Picture</button>");

	});
}

	$("body").on("click", "button", function(e){
		console.log("click");
		$.getJSON("http://www.omdbapi.com/?t=" + $("#movie").val(), function(data){
			$("body").append("<img>");
			$("img").attr("src", data.Poster);
			// $("body").append(data.Poster);	
	});

});

	// try getJSON and done
	$("form").on("submit", function(e){
		var movie = $("#movie").val();
		getMovieTitle(movie);
		e.preventDefault();
	});
});