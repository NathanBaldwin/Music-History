define(["jquery"],
	function($) {
		var songNameInput = $("#song-name");
		var artistNameInput = $("#artist");
		var albumNameInput = $("#album");

	$("#add-button").click(function(e) {
		var newSong = {
			songTitle: songNameInput.val(),
			artist: artistNameInput.val(),
			album: albumNameInput.val()
			}
	$.ajax({
		url:"https://blazing-torch-8825.firebaseio.com/songList.json",
		error: function (a, b, c) {
			console.log(a, b, c);
		},
		method: "POST",
		data: JSON.stringify(newSong)
		}).done(function(addedSong) {
		console.log("Your new song is", addedSong);
		});
	});
});


