// Search for Starship name using user input

$(document).on('keyup',"#search-ship", function(event) {

	event.preventDefault();

	$(".hidden").removeClass("hidden");

	var nameSearch = $("#search-ship").val();
	var urlshipName = "https://swapi.co/api/starships/?search=" + nameSearch;

	$.ajax({
		url: urlshipName,
		dataType: 'json',

	})

	.success(function( searchItem ) {
		var searchOutput = "";

		$.each(searchItem.results, function(i, sData){
			var url = sData.url;
			url = url.replace("http","https");
			searchOutput += '<tr data-toggle="modal" data-target="#ship_modal" id="'+url+'"><td>' + sData.name + '</td><td>' + sData.model + '</td><td>' + sData.cost_in_credits + '</td></tr>';
		})		


		$("#ship-results").html( searchOutput );
	});
})

// Return specific vehicle and generate html for modal
$(document).on('click', "#ship-results tr", function(event){

	// empty out old data on every fresh click
	$("#ship-list").html("");
	$("#veh-list").html("");

	var urlID = $(this).attr('id');

	$.ajax({
		url: urlID,
		dataType: 'json',

	})

	.success(function( shipDetail ) {
		$("#shipModalLabel").html(shipDetail.name);
		$("#shipMaker").html("<li class='list-group-item'>"+shipDetail.manufacturer+"</li>");
		$("#shipCrew").html("<li class='list-group-item'>"+shipDetail.crew+"</li>");
		$("#shipPass").html("<li class='list-group-item'>"+shipDetail.passengers+"</li>");
		$("#shipSpeed").html("<li class='list-group-item'>"+shipDetail.max_atmosphering_speed+"</li>");
		$("#shipLength").html("<li class='list-group-item'>"+shipDetail.length+"</li>");
		$("#shipCost").html("<li class='list-group-item'>"+shipDetail.cost_in_credits+"</li>");
		$("#shipModel").html("<li class='list-group-item'>"+shipDetail.model+"</li>");
		$("#shipCargo").html("<li class='list-group-item'>"+shipDetail.cargo_capacity+"</li>");
		$("#shipCons").html("<li class='list-group-item'>"+shipDetail.consumables+"</li>");

		
		

		var appearsIn="";
		for (var i=0; i<shipDetail.films.length; i++) {
			
			
			if (shipDetail.films[i] == "http://swapi.co/api/films/1/") {
				appearsIn+='<img title="A New Hope" class="img-responsive img-rounded" src="img/ep4.jpg">';
			}
			else if (shipDetail.films[i] == "http://swapi.co/api/films/2/") {
				appearsIn+='<img title="Empire Strikes Back" class="img-responsive img-rounded" src="img/ep5.jpg">';
			}
			else if (shipDetail.films[i] == "http://swapi.co/api/films/3/") {
				appearsIn+='<img title="Return of the Jedi" class="img-responsive img-rounded" src="img/ep6.jpg">';
			}
			else if (shipDetail.films[i] == "http://swapi.co/api/films/4/") {
				appearsIn+='<img title="The Phantom Menace" class="img-responsive img-rounded" src="img/ep1.jpg">';
			}
			else if (shipDetail.films[i] == "http://swapi.co/api/films/5/") {
				appearsIn+='<img title="Attack of the Clones" class="img-responsive img-rounded" src="img/ep2.jpg">';
			}
			else if (shipDetail.films[i] == "http://swapi.co/api/films/6/") {
				appearsIn+='<img title="Revenge of the Sith" class="img-responsive img-rounded" src="img/ep3.jpg">';
			}
			else if (shipDetail.films[i] == "http://swapi.co/api/films/7/") {
				appearsIn+='<img title="The Force Awakens" class="img-responsive img-rounded" src="img/ep7.jpg">';
			}
			else  {
				console.log("shouldn't see me");
			}
			
		};
		$("#ship-list").html(appearsIn);
	});

})