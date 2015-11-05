

define(["jquery"],
	function($) {
		return {

			firstSongs: function() {
				$.ajax({
					url:"data/songs.json",
					error: function (a, b, c) {
			console.log(a, b, c);
		}
	}).done(function(songObject) {
		console.log(">>>>>>>>>>>> I see songs.json!!");
		console.log("songList", songObject.songList);

		return songObject.songList;
	});

	}

});