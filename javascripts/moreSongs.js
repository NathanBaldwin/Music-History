

define(["jquery"],
	function($) {
		return {
			moreSongs: function(callBack) {
				$.ajax({
					url:"data/moreSongs.json",
					error: function (a, b, c) {
						console.log(a, b, c);
					}
				}).done(callBack);
			}
		};
	});


