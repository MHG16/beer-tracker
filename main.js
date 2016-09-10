/*
An application that uses AJAX to store and list information on my favorite beers.
The following information will be stored:
1 Beer Name
2 Type of Beer
3 Brewery Name
4 Location of Brewery - City and State


Phase 2 will allow you to upload a photo of the bottle/glass to the application for each beer.
-also allow for rating the beer

Phase 3 will allow you to delete and edit entries.  

Use Tiny Pizza Server for AJAX requests in this application:
url: 'http://small-tiyfe.herokuapp.com/collections/beer',

*/

var $beer = $('#beer');

$(function () {
	$.ajax({
		type: 'GET',
		url: 'http://small-tiyfe.herokuapp.com/collections/beer'
		//this part will allow us to get data on the page:
		success: function(data) {
			$.each(data, function(i, beer) {
				$beer.append('<li>Name: '+ beer.name +', Type: '+ beer.name +', Brewery: '+ beer.brewery +', Location: '+ beer.location' </li>');

			});

		}
	});



});
