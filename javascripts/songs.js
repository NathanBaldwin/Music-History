
define(["jquery", "populateDom", "songs"],
	function($, populateDom, songs) {
		return {

			firstSongs: function(callBack) {
				$.ajax({
					url:"https://blazing-torch-8825.firebaseio.com/.json"
				}).done(callBack)
				.fail(function (a, b, c) {
					console.log("error data:", a, b, c);
				});
			},

			allSongs: function(callBack) {
				$.ajax({
					url:"https://blazing-torch-8825.firebaseio.com/songList.json",
					error: function (a, b, c) {
						console.log(a, b, c);
					}
				}).done(callBack);
			}
		};
	});


