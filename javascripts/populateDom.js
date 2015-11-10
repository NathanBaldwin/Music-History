
define(["jquery"],
	function($) {
		return {
			populateMain: function (firstSongs) {
				console.log("populate main fired!", firstSongs);

		 		require(['hbs!../templates/songs'], function(songTemplate){
		 			console.log("songTemplate",songTemplate);
		 			console.log("firstSongs",firstSongs);
		 			$("#insertHTML").append(songTemplate(firstSongs));
		 		});
		 	},
		 	populateArtistSelect: function (firstSongs) {
				console.log("populate artist fired!", firstSongs);

		 		require(['hbs!../templates/artists'], function(artistsSelectTemplate){
		 			console.log("songTemplate", artistsSelectTemplate);
		 			console.log("firstSongs",firstSongs);
		 			$("#artist-select").append(artistsSelectTemplate(firstSongs));
		 		});
		 	},
		 	populateAlbumSelect: function (firstSongs) {
				console.log("populate artist fired!", firstSongs);

		 		require(['hbs!../templates/albumSelect'], function(albumSelectTemplate){
		 			console.log("songTemplate", albumSelectTemplate);
		 			console.log("firstSongs",firstSongs);
		 			$("#album-select").append(albumSelectTemplate(firstSongs));
		 		});
		 	}
		 };
	});


