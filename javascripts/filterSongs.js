
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
					//console.log("prop", prop);
					// console.log("allSongs[prop]", allSongs[prop]);
					// console.log("allSongs[prop].artist", allSongs[prop].artist);
					if (allSongs[prop].artist === selectedArtist) {
						//console.log("########I FOUND A MATCH!!#########", allSongs[prop].artist);
						var titleOfmatch = prop;
						//console.log("titleOfmatch", titleOfmatch);
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
					// console.log("prop", prop);
					// console.log("allSongs[prop]", allSongs[prop]);
					// console.log("allSongs[prop].album", allSongs[prop].album);
					if (allSongs[prop].album === selectedAlbum) {
						//console.log("########I FOUND A MATCH!!#########", allSongs[prop].album);
						var titleOfmatch = prop;
						// console.log("titleOfmatch", titleOfmatch);
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
					// console.log("prop", prop);
					// console.log("allSongs[prop]", allSongs[prop]);
					// console.log("allSongs[prop].album", allSongs[prop].album);
					if (allSongs[prop].album === selectedAlbum && allSongs[prop].artist === selectedArtist) {
						// console.log("########I FOUND A MATCH!!#########", allSongs[prop].album);
						var titleOfmatch = prop;
						// console.log("titleOfmatch", titleOfmatch);
						var objectOfmatch = allSongs[prop];
						// console.log("objectOfmatch", objectOfmatch);

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




