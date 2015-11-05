requirejs.config({
	baseUrl: "./javascripts",
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	},
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	}
});

require(
	["jquery", "bootstrap", "musichistoryR4"],
	function($, bootstrap, musichistoryR4) {
		
	}
);