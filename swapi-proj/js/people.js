// Search for People name using user input
$(document).on('keyup', "#searchQuery", function(event) {

	event.preventDefault();
	
	$(".hidden").removeClass("hidden");

	var nameSearch = $("#searchQuery").val();
	var urlPeopleName = "https://swapi.co/api/people/?search=" + nameSearch;

	$.ajax({
		url: urlPeopleName,
		dataType: 'json',

	})

	.success(function( searchItem ) {
		var searchOutput = "";

		$.each(searchItem.results, function(i, sData){
			var url = sData.url;
			url = url.replace("http","https");
			
			
			searchOutput += '<tr data-toggle="modal" data-target="#sw_modal" id="'+url+'"><td>' + sData.name + '</td><td>' + sData.gender + '</td><td>' + sData.skin_color + '</td></tr>';
		})		


		$("#search-results").html( searchOutput );
	});
})

// Return specific person, format for modal
$(document).on('click', "#search-results tr", function(event){

	// empty out old data on every fresh click
	$("#ship-list").html("");
	$("#veh-list").html("");

	var urlID = $(this).attr('id');

	$.ajax({
		url: urlID,
		dataType: 'json',

	})

	.success(function( personDetail ) {
		var personOutput = "";
		var genderIcon;
		var planetName = personDetail.homeworld;
		var starships = personDetail.starships;
		

		if (personDetail.gender == "male"){
			genderIcon="<i class='fa fa-mars fa-3x'></i>"
		}	else if (personDetail.gender == "female"){
			genderIcon="<i class='fa fa-venus fa-3x'></i>"
		}	else if (personDetail.gender =="n/a"){
			genderIcon="<i class='fa fa-ban fa-3x'></i>"
		}	else if (personDetail.gender =="hermaphrodite"){
			genderIcon="<i class='fa fa-mercury fa-3x'></i>"
		}	else {
			genderIcon=""			
		};
		
// Generate html for modal
$("#peopleModalLabel").html(personDetail.name);
$("#peopleHeight").html("<li class='list-group-item'>"+personDetail.height+"</li>");
$("#peopleWeight").html("<li class='list-group-item'>"+personDetail.mass+"</li>");
$("#peopleHair").html("<li class='list-group-item'>"+personDetail.hair_color+"</li>");
$("#peopleEyes").html("<li class='list-group-item'>"+personDetail.eye_color+"</li>").css("color", personDetail.eye_color);
$("#genderIco").html("     "+genderIcon);
$("#peopleYear").html("<li class='list-group-item'>"+personDetail.birth_year+"</li>");

			var url = planetName;
			url = url.replace("http","https");
$.ajax({
	url: url,
	dataType: 'json',
})

.success(function( homeWorld) {
	$("#peopleWorld").html("<li class='list-group-item'>"+homeWorld.name+"</li>")
})


var shipList='';

$.each(personDetail.starships, function(i, shipData){
	var url = shipData;
	url = url.replace("http","https");

	$.ajax({
		url: url,
		dataType: 'json',
	})
	.success(function( shipName) {
		shipList+= "<li class='list-group-item'>"+shipName.name+"</li>";
		$("#ship-list").html(shipList);
	})
})

var vehList='';

$.each(personDetail.vehicles, function(i, vehData){
	var url = vehData;
	url = url.replace("http","https");

	$.ajax({
		url: url,
		dataType: 'json',
	})
	.success(function( vehName) {
		vehList+= "<li class='list-group-item'>"+vehName.name+"</li>";
		$("#veh-list").html(vehList);
	})
})



var urls = personDetail.species;
urls = urls[0].replace("http","https");

$.ajax({
	url: urls,
	dataType: 'json',
})

.success(function( species) {
	$("#peopleSpecies").html("<li class='list-group-item'>"+species.name+"</li>")
})

appearsIn = getFilmPic(personDetail);

$("#film-list").html(appearsIn);


});  
})  
