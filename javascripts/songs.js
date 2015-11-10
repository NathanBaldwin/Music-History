
define(["jquery"],
	function($) {
		return {
			firstSongs: function(callBack) {
				$.ajax({
					url:"https://blazing-torch-8825.firebaseio.com/.json",
					error: function (a, b, c) {
						console.log(a, b, c);
					}
				}).done(callBack);
			}
		};
	});


