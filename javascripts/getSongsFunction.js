define(["jquery"],
	function($) {

		var songNameInput = $("#song-name");
		var artistNameInput = $("#artist");
		var albumNameInput = $("#album");

		var outputEl = $("#insertHTML");
		var newSong = {};	

		return {

			getSongs: function (songs) {
				console.log("went to get songs!", songs);

		 		require(['hbs!../templates/songs'], function(songTemplate){
		 			console.log("songTemplate",songTemplate);
		 			console.log("songs",songs);
		 			$("#insertHTML").append(songTemplate(songs));
		 		});
	 		},

	 		addSongs: function() {
		 			newSong = {
		 				"songList" : [ 
		 					{
				 				"songTitle": songNameInput.val(),
				 				"artist": artistNameInput.val(),
				 				"album": albumNameInput.val()
		 					} 
		 				]
		 			};
		 			

	 			console.log("newSong", newSong);

	 			console.log("this.getSongs", this.getSongs);
	 			this.getSongs(newSong);


	 			}
	 		};

});