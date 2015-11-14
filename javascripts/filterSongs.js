
define(["jquery", "populateDom"],
	function($, populateDom) {

		return {

			filterByArtist: function(allSongs) {

				console.log("allSongs", allSongs);

				var selectedArtist = $("#selected-artist").val();
				var currentSongList = allSongs;
				var filteredSongList = {};
				var filteredSongArray = [];

				for (var prop in currentSongList) {
					
					if (allSongs[prop].artist === selectedArtist) {

						console.log("########I FOUND A MATCH!!#########", allSongs[prop].artist);
		
						var objectOfmatch = allSongs[prop];
						console.log("objectOfmatch", objectOfmatch);

						filteredSongArray.push(objectOfmatch);

						filteredSongList = {
							"songList": filteredSongArray
						};

					populateDom.populateFiltered(filteredSongList);
				}
			}
		},
		filterByAlbum: function(allSongs) {

				console.log("allSongs", allSongs);

				var selectedAlbum = $("#selected-album").val();
				var currentSongList = allSongs;
				var filteredSongList = {};
				var filteredSongArray = [];

				for (var prop in currentSongList) {
					
					if (allSongs[prop].album === selectedAlbum) {
						console.log("########I FOUND A MATCH!!#########", allSongs[prop].album);
						
						var objectOfmatch = allSongs[prop];
						console.log("objectOfmatch", objectOfmatch);

						filteredSongArray.push(objectOfmatch);

						filteredSongList = {
							"songList": filteredSongArray
						};

					populateDom.populateFiltered(filteredSongList);
				}
			}
		},
		filterByBoth: function(allSongs) {

				console.log("allSongs", allSongs);

				var selectedArtist = $("#selected-artist").val();
				var selectedAlbum = $("#selected-album").val();
				var currentSongList = allSongs;
				var filteredSongList = {};
				var filteredSongArray = [];

				for (var prop in currentSongList) {
					
					if (allSongs[prop].album === selectedAlbum && allSongs[prop].artist === selectedArtist) {
						console.log("########I FOUND A MATCH!!#########", allSongs[prop].album);
						
						var objectOfmatch = allSongs[prop];
						console.log("objectOfmatch", objectOfmatch);

						filteredSongArray.push(objectOfmatch);

						filteredSongList = {
							"songList": filteredSongArray
						};

						populateDom.populateFiltered(filteredSongList);
					} 
			}
		}
	};
});




