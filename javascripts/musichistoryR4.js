
define(["jquery", "songs", "moreSongs", "getSongsFunction"],
	function($, songs, moreSongs, getSongs) {

	//populate first songs from songs.json:

	songs.firstSongs(getSongs.getSongs);

	// "Add more songs" button functionality
	$("#more").click(function() {
		moreSongs.moreSongs(getSongs.getSongs);
	});

	//adding delete button functionality:

	$("body").on("click", ".delete", function() {
		console.log("click event", event);
		var thisElement = event.target;
		console.log("event.target", thisElement);
		$(thisElement).parent().parent().remove();
	});

//Creating Add Music Page:

var addMusicButton = $("#add-music-button");
var listMusicPage = $("#list-music-page");
var addMusicPage = $("#add-music");
var listMusicButton = $("#list-music");
var addButton = $("#add-button");
var sideBar = $("#sideBar");
//var body = $("#body");

console.log("list music button", listMusicButton);

console.log("list music page", listMusicPage);

console.log("add button", addButton);

	//Add Music button will switch pages:

function addMusicSwitch () {
	console.log("you clicked add music");
	listMusicPage.hide();
	addMusicPage.show();
	$("body").addClass("hard-left");
	songNameInput.val("");
	artistNameInput.val("");
	albumNameInput.val("");
}

addMusicButton.click(addMusicSwitch);

	//List Music button will switch pages:

function listMusicSwitch () {
	console.log("you clicked list music");
	listMusicPage.show();
	addMusicPage.hide();
	$("body").removeClass("hard-left");
}

listMusicButton.click(listMusicSwitch);

	//Add Button functionality:

var songNameInput = $("#song-name");
var artistNameInput = $("#artist");
var albumNameInput = $("#album");

function addMusic () {
	getSongs.addSongs();

}

addButton.click(function() {
	getSongs.addSongs();
	listMusicPage.show();
	addMusicPage.hide();
	$("body").removeClass("hard-left");

});




});


