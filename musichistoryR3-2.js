$(document).ready(function() { 	


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Spring > by My Morning Jacket on the album Waterfall");
songs.unshift("Don't Make Me a Target > by Spoon on the album Ga Ga Ga Ga Ga");

console.log("Songs Added Array", songs);

var output = "";
var dash = "";
var songArray = []
var artistAlbum = [];
var songList = $("#insertHTML");


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

	output += "<section><h2>" + songArray[i] + "</h2> <h4>" + artistAlbum[i] + "</h4></section>";
	}

	songList.html(output);
}

updateSongList();

console.log("output", output);

console.log("Deletes", songs);
console.log(songs[0])
console.log("test")

console.log("insertHTML", insertHTML)
// console.log('inner HTML', insertHTML.innerHTML)
// $("insertHTML")





//Creating Add Music Page:

var addMusicButton = $("#add-music-button");
var listMusicPage = $("#fullWidthDiv");
var addMusicPage = $("#add-music");
var listMusicButton = $("#list-music");
var addButton = $("#add-button");

console.log("list music button", listMusicButton);

console.log("list music page", listMusicPage);

console.log("add button", addButton);

	//Add Music button will switch pages:

function addMusicSwitch () {
	console.log("you clicked add music");
	listMusicPage.hide();
	addMusicPage.show();
	songNameInput.val("")
	artistNameInput.val("");
	albumNameInput.val("");
}

addMusicButton.click(addMusicSwitch);

	//List Music button will switch pages:

function listMusicSwitch () {
	console.log("you clicked list music");
	listMusicPage.show();
	addMusicPage.hide();
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










});