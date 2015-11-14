define(["jquery", "songs", "populateDom", "q"],
	function($, songs, populateDom, Q) {

	var songNameInput = $("#song-name");
	var artistNameInput = $("#artist");
	var albumNameInput = $("#album");

	return {

		addSong: function() {

				var deferred = Q.defer();

				var newSong = {
					songTitle: songNameInput.val(),
					artist: artistNameInput.val(),
					album: albumNameInput.val()
					};

			$.ajax({
				url:"https://blazing-torch-8825.firebaseio.com/songList.json",
				method: "POST",
				data: JSON.stringify(newSong)
				}).done(function(newSong) {
					console.log("Your new song is", newSong);
					deferred.resolve(newSong);
				})
				.fail(function(xhr, status, error) {
					deferred.reject(error);
				});
			return deferred.promise;
		},

		deleteSong: function(songID) {

			var deferred = Q.defer();

			$.ajax({
				url:"https://blazing-torch-8825.firebaseio.com/songList/"+songID+".json/",
				error: function (a, b, c) {
					console.log(a, b, c);
				},
				method: "DELETE",
				}).done(function(deleteInfo) {
					console.log("deleteInfo", deleteInfo);
					deferred.resolve(deleteInfo);
				})
				.fail(function(xhr, status, error) {
					console.log("error info", exr, status, error);
					deferred.reject(error);
				});

			return deferred.promise;	
		}
	}
});


