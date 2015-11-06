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
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
	}
});

require(
	["jquery", "bootstrap", "hbs", "musichistoryR4"],
	function($, bootstrap, hbs, musichistoryR4) {
		
	}
);

// require(['hbs!../templates/songs'], function(songTemplate)) {
// 	$("#songList").html(songTemplate)
// }