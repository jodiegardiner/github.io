
// Search for Vehicle name using user input

$(document).on('keyup', "#search-vehicle", function(event) {

	event.preventDefault();

	$(".hidden").removeClass("hidden");

	var nameSearch = $("#search-vehicle").val();
	var urlVehName = "https://swapi.co/api/vehicles/?search=" + nameSearch;

	$.ajax({
		url: urlVehName,
		dataType: 'json',

	})

	.success(function( searchItem ) {
		var searchOutput = "";

		$.each(searchItem.results, function(i, sData){
			var url = sData.url;
			url = url.replace("http","https");
			
			searchOutput += '<tr data-toggle="modal" data-target="#veh_modal" id="'+url+'"><td>' + sData.name + '</td><td>' + sData.manufacturer + '</td><td>' + sData.crew + '</td><td>' + sData.cost_in_credits + '</td></tr>';
		})		


		$("#vehicle-results").html( searchOutput );
	});
})

// Return specific vehicle and generate html for modal

$(document).on('click', "#vehicle-results tr", function(event){

	// empty out old data on every fresh click
	$("#ship-list").html("");
	$("#veh-list").html("");

	var urlID = $(this).attr('id');

	$.ajax({
		url: urlID,
		dataType: 'json',

	})

	.success(function( vehicleDetail ) {
		$("#vehicleModalLabel").html(vehicleDetail.name);
		$("#vehicleMaker").html("<li class='list-group-item'>"+vehicleDetail.manufacturer+"</li>");
		$("#vehicleCrew").html("<li class='list-group-item'>"+vehicleDetail.crew+"</li>");
		$("#vehiclePass").html("<li class='list-group-item'>"+vehicleDetail.passengers+"</li>");
		$("#vehicleSpeed").html("<li class='list-group-item'>"+vehicleDetail.max_atmosphering_speed+"</li>");
		$("#vehicleLength").html("<li class='list-group-item'>"+vehicleDetail.length+"</li>");
		$("#vehicleCost").html("<li class='list-group-item'>"+vehicleDetail.cost_in_credits+"</li>");
		$("#vehicleModel").html("<li class='list-group-item'>"+vehicleDetail.model+"</li>");
		$("#vehicleCargo").html("<li class='list-group-item'>"+vehicleDetail.cargo_capacity+"</li>");
		$("#vehicleCons").html("<li class='list-group-item'>"+vehicleDetail.consumables+"</li>");

		
		

		var appearsIn="";
		for (var i=0; i<vehicleDetail.films.length; i++) {
			
			
			if (vehicleDetail.films[i] == "http://swapi.co/api/films/1/") {
				appearsIn+='<img title="A New Hope" class="img-responsive img-rounded" src="img/ep4.jpg">';
			}
			else if (vehicleDetail.films[i] == "http://swapi.co/api/films/2/") {
				appearsIn+='<img title="Empire Strikes Back" class="img-responsive img-rounded" src="img/ep5.jpg">';
			}
			else if (vehicleDetail.films[i] == "http://swapi.co/api/films/3/") {
				appearsIn+='<img title="Return of the Jedi" class="img-responsive img-rounded" src="img/ep6.jpg">';
			}
			else if (vehicleDetail.films[i] == "http://swapi.co/api/films/4/") {
				appearsIn+='<img title="The Phantom Menace" class="img-responsive img-rounded" src="img/ep1.jpg">';
			}
			else if (vehicleDetail.films[i] == "http://swapi.co/api/films/5/") {
				appearsIn+='<img title="Attack of the Clones" class="img-responsive img-rounded" src="img/ep2.jpg">';
			}
			else if (vehicleDetail.films[i] == "http://swapi.co/api/films/6/") {
				appearsIn+='<img title="Revenge of the Sith" class="img-responsive img-rounded" src="img/ep3.jpg">';
			}
			else if (vehicleDetail.films[i] == "http://swapi.co/api/films/7/") {
				appearsIn+='<img title="The Force Awakens" class="img-responsive img-rounded" src="img/ep7.jpg">';
			}
			else  {
				console.log("shouldn't see me");
			}
			
		};
		$("#vehicle-list").html(appearsIn);
	})

})