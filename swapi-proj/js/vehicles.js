
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

		appearsIn = getFilmPic(vehicleDetail);
		$("#vehicle-list").html(appearsIn);
	})

})