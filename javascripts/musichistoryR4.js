

define(["jquery"],
	function($) {

var songs = [];

function inputSongs (songs) {
	console.log(">>>>>>>>>>>> I see Json!!");
	console.log("songList", songs.songList);

	for (var i = 0; i < songs.songList.length; i++) {
		var currentSong = songs.songList[i];
		var initialOutput = "";
		initialOutput += "<section><h2>" + currentSong.songTitle + "</h2>";
		initialOutput += "<h4>By " + currentSong.artist + ", on the album "; 
		initialOutput += currentSong.album
		initialOutput += "<input class='delete' type='button' value='delete'></h4></section>";
		songList.append(initialOutput);
		//songList.append("<section><h2>" + currentSong.songTitle + "</h2>");
		//songList.append("<h4>By " + currentSong.artist + ", on the album " + currentSong.album + "<input type='button' class='delete' value='delete'></h4></section>");
	}
}

$.ajax({
	url:"data/songs.json",
	error: function (a, b, c) {
		console.log(a, b, c);
	}


}).done(inputSongs);

//input More Songs from moreSongs.json:

$.ajax({
	url:"data/moreSongs.json",
	error: function (a, b, c) {
		console.log(a, b, c);
	}

}).done(function(songObject) {
	console.log("*******I see moreSongs!! ****************");
	console.log("moreSongs object", songObject);
	$("#more").click(function() {
		for (var i = 0; i < songObject.songList.length; i++) {
		var currentSong = songObject.songList[i];
		var initialOutput = "";
		initialOutput += "<section><h2>" + currentSong.songTitle + "</h2>";
		initialOutput += "<h4>By " + currentSong.artist + ", on the album "; 
		initialOutput += currentSong.album
		initialOutput += "<input class='delete' type='button' value='delete'></h4></section>";
		songList.append(initialOutput);
	}
		
	})
	
});


//songs.push("Spring > by My Morning Jacket on the album Waterfall");
//songs.unshift("Don't Make Me a Target > by Spoon on the album Ga Ga Ga Ga Ga");

console.log("Songs Added Array", songs);

var output = "";
var dash = "";
var songArray = [];
var artistAlbum = [];
var songList = $("#insertHTML");
var bodyListener = $(document);


function updateSongList () {

	output = "";

	for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/\*/g, "");
		songs[i] = songs[i].replace(/@/g, "");
		songs[i] = songs[i].replace(/\(/g, "");
		songs[i] = songs[i].replace(/!/g, "");
		songs[i] = songs[i].replace(/>/g, "-");

		dash = songs[i].indexOf("-");
		console.log("index of dash", dash);


		if (dash !== -1) {
			artistAlbum[i] = songs[i].slice(dash + 1);
			songArray[i] = songs[i].slice(0, dash);
		}

	console.log("songArray", songArray);
	console.log("artistAlbum", artistAlbum);

	output += "<section><h2>" + songArray[i] + "</h2> <h4>" + artistAlbum[i] + "<input type='button' class='delete' value='delete'></h4></section>";
	}

	songList.prepend(output);
}

updateSongList();

console.log("output", output);

console.log("Deletes", songs);
console.log(songs[0]);
console.log("test");

console.log("insertHTML", insertHTML);
// console.log('inner HTML', insertHTML.innerHTML)
// $("insertHTML")





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
	console.log("song input test", songNameInput.val());
	console.log("artist input test", artistNameInput.val());
	console.log("album input test", albumNameInput.val());
	songs.unshift(songNameInput.val() + " - by " + artistNameInput.val() + " on the album " + albumNameInput.val());
	updateSongList();

}

addButton.click(addMusic);

//Adding delete line functionality:
bodyListener.on("click", function() {
	console.log("click event", event);
})

bodyListener.on('click', '.delete', function () {
	console.log("you clicked delete!");
	console.log("event", event);
	var thisElement = event.target;
	console.log("event.target", thisElement);
	$(thisElement).parent().parent().remove();
});










});