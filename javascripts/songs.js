

define(["jquery"],
	function($) {
		return {
			firstSongs: function(callBack) {
				$.ajax({
					url:"data/songs.json",
					error: function (a, b, c) {
						console.log(a, b, c);
					}
				}).done(callBack);
			}
		};
	});


