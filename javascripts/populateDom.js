
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
		 	},

		 	populateAddSongModal: function () {
		 		var songNameInput = $("#song-name");
				var artistNameInput = $("#artist");
				var albumNameInput = $("#album");

				var newSong = {
					songTitle: songNameInput.val(),
					artist: artistNameInput.val(),
					album: albumNameInput.val()
					};

		 		require(['hbs!../templates/addSongModal'], function(addSongModalTemplate){
		 			console.log("addSongModalTemplate",addSongModalTemplate);
		 			
		 			$("#new-song-data").html(addSongModalTemplate({newSong}));
		 		});
		 	},

		 	populateDeleteSongModal: function (deletedSong) {
		 		console.log("deletedSong", deletedSong);
		 		
		 		require(['hbs!../templates/deleteSongModal'], function(deleteSongModalTemplate){
		 			console.log("deleteSongModalTemplate", deleteSongModalTemplate);
		 			
		 			$("#delete-message").html(deleteSongModalTemplate({deletedSong}));
		 		});
		 	}
		 };
	});


