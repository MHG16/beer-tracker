/*
An application that uses AJAX to store and list information on my favorite beers.
The following information will be stored:
1 Beer Name
2 Type of Beer
3 Brewery Name
4 Location of Brewery - City and State
5 Where I had the beer

Phase 2 will allow you to upload a photo of the bottle/glass to the application for each beer.
-also allow for rating the beer

Phase 3 will allow you to delete and edit entries.  

Use Tiny Pizza Server for AJAX requests in this application:
url: 'http://small-tiyfe.herokuapp.com/collections/mgrossmann',

*/

var beer = [{Beer Name: 'Hijack'}, {Beer Name: 'Hefeweizen'}];

beer.forEach(function(beer) {

	var settings = $.ajax({

		url: 'http://small-tiyfe.herokuapp.com/collections/mgrossmann',
		type: 'post',
		data: beer,
		datatype: 'json',

		success: function(data) {
			console.log(beer);
		},

		error: function(data) {
			console.log(err);
		},

		complete: function(data) {
			console.log('I got a message!');
		}
	})	

});


