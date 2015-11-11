
define(["jquery", "populateDom"],
	function($, populateDom) {
		return {

			firstSongs: function(callBack) {
				$.ajax({
					url:"https://blazing-torch-8825.firebaseio.com/.json",
					error: function (a, b, c) {
						console.log(a, b, c);
					}
				}).done(callBack);
			},

			allSongs: function(callBack) {
				$.ajax({
					url:"https://blazing-torch-8825.firebaseio.com/songList.json",
					error: function (a, b, c) {
						console.log(a, b, c);
					}
				}).done(callBack);

				// (function(allSongs) {
				// 	console.log("allSongs", allSongs);

				// 	var currentSongList = allSongs;
				// 	var selectedArtist = $("#selected-artist").val();
				// 	var filteredSongList = {};
				// 	var filteredSongArray = [];

				// 	for (var prop in currentSongList) {
				// 		console.log("prop", prop);
				// 		console.log("allSongs[prop]", allSongs[prop]);
				// 		console.log("allSongs[prop].artist", allSongs[prop].artist);
				// 		if (allSongs[prop].artist === selectedArtist) {
				// 			console.log("########I FOUND A MATCH!!#########", allSongs[prop].artist);
				// 			var titleOfmatch = prop;
				// 			console.log("titleOfmatch", titleOfmatch);
				// 			var objectOfmatch = allSongs[prop];
				// 			console.log("objectOfmatch", objectOfmatch);

				// 			filteredSongArray.push(objectOfmatch);

				// 			filteredSongList = {
				// 				"songList": filteredSongArray
				// 			};

				// 			populateDom.populateFiltered(filteredSongList);

				// 		}
				// 	}

				// });
			}
		};
	});


