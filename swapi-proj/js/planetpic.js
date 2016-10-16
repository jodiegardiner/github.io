function getFilmPic(api_call) {

	var appearsIn="";
		

		for (var i=0; i<api_call.films.length; i++) {
			
			
			if (api_call.films[i] == "http://swapi.co/api/films/1/") {
				appearsIn+='<img title="A New Hope" class="img-responsive img-rounded" src="img/ep4.jpg">';
			}
			else if (api_call.films[i] == "http://swapi.co/api/films/2/") {
				appearsIn+='<img title="Empire Strikes Back" class="img-responsive img-rounded" src="img/ep5.jpg">';
			}
			else if (api_call.films[i] == "http://swapi.co/api/films/3/") {
				appearsIn+='<img title="Return of the Jedi" class="img-responsive img-rounded" src="img/ep6.jpg">';
			}
			else if (api_call.films[i] == "http://swapi.co/api/films/4/") {
				appearsIn+='<img title="The Phantom Menace" class="img-responsive img-rounded" src="img/ep1.jpg">';
			}
			else if (api_call.films[i] == "http://swapi.co/api/films/5/") {
				appearsIn+='<img title="Attack of the Clones" class="img-responsive img-rounded" src="img/ep2.jpg">';
			}
			else if (api_call.films[i] == "http://swapi.co/api/films/6/") {
				appearsIn+='<img title="Revenge of the Sith" class="img-responsive img-rounded" src="img/ep3.jpg">';
			}
			else if (api_call.films[i] == "http://swapi.co/api/films/7/") {
				appearsIn+='<img title="The Force Awakens" class="img-responsive img-rounded" src="img/ep7.jpg">';
			}
			else  {
				console.log("shouldn't see me");
			}
			
		};
		console.log(appearsIn)
		return appearsIn
}