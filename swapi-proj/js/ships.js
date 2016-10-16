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

		
		appearsIn = getFilmPic(shipDetail);
		$("#ship-list").html(appearsIn);
	});

})