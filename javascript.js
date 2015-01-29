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

	});
}
	// try getJSON and done
	$("form").on("submit", function(e){
		var movie = $("#movie").val();
		getMovieTitle(movie);
		e.preventDefault();
	});
});