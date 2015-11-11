
define(["jquery", "lodash"],
	function($, _) {
		return {
			populateMain: function (firstSongs) {
				console.log("populate main fired!", firstSongs);

		 		require(['hbs!../templates/songs', 'hbs!../templates/artists', 'hbs!../templates/albumSelect'], function(songTemplate, artistSelectTemplate, albumSelectTemplate){
		 			console.log("songTemplate",songTemplate);
		 			console.log("firstSongs",firstSongs);
		 			
		 			$("#insertHTML").html(songTemplate(firstSongs));

		 			var currentSongList = firstSongs.songList;
		 			//console.log("currentSongList", currentSongList);
					var allArtists = [];
					var allAlbums = [];

		 			for (var prop in currentSongList) {
						// console.log("prop", prop);
						// console.log("currentSongList[prop]", currentSongList[prop]);
						var currentArtist = currentSongList[prop].artist;
						//console.log("currentArtist", currentArtist);
						var currentAlbum = currentSongList[prop].album;
						//console.log("currentAlbum", currentAlbum);
						
						allArtists.push(currentArtist);
						//console.log("all Artists", allArtists);

						allAlbums.push(currentAlbum);
						//console.log("all Albums", allAlbums);
					}

					var uniqueArtists = _.uniq(allArtists);
					//console.log("uniqueArtists", uniqueArtists);

					var uniqueAlbums = _.uniq(allAlbums);
					//console.log("uniqueAlbums", uniqueAlbums);

					$("#artist-select").html(artistSelectTemplate(uniqueArtists));
					$("#album-select").html(albumSelectTemplate(uniqueAlbums));
		 		});
		 	},

		 	populateFiltered: function (firstSongs) {
				console.log("populate main fired!", firstSongs);

		 		require(['hbs!../templates/songs'], function(songTemplate){
		 			console.log("songTemplate",songTemplate);
		 			console.log("firstSongs",firstSongs);
		 			$("#insertHTML").html("");
		 			$("#insertHTML").append(songTemplate(firstSongs));
		 		});
		 	}
		 };
	});


