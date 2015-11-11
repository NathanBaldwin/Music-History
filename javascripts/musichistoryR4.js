
define(["jquery", "songs", "moreSongs", "getSongsFunction", "populateDom", "addSongFirebase", "filterSongs"],
	function($, songs, moreSongs, getSongs, populateDom, addSong, filterSongs) {

	//populate first songs from songs.json:

	songs.firstSongs(populateDom.populateMain);
	// songs.firstSongs(populateDom.populateArtistSelect);
	// songs.firstSongs(populateDom.populateAlbumSelect);

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
		songs.firstSongs(populateDom.populateMain);
		listMusicPage.show();
		addMusicPage.hide();
		$("body").removeClass("hard-left");
	}

	listMusicButton.click(listMusicSwitch);

		//Add Button functionality:

	var songNameInput = $("#song-name");
	var artistNameInput = $("#artist");
	var albumNameInput = $("#album");

	// function addMusic () {
	// 	addSong.addSong();

	// }

	addButton.click(function() {
		addSong.addSong();
		listMusicPage.show();
		addMusicPage.hide();
		$("body").removeClass("hard-left");
	});

	//Filter button functionality:

	var filter = $("#filter");

	filter.click(function() {
		console.log("you clicked filter!");

		var selectedArtist = $("#selected-artist").val();
		console.log("selectedArtist", selectedArtist);
		var selectedAlbum = $("#selected-album").val();
		console.log("selectedAlbum", selectedAlbum);

		//alert(selectedArtist + "" + selectedAlbum);
		
		//console.log("selected artist:", selectedArtist);
		if (selectedArtist !== "Artists" && selectedAlbum !== "Albums") {
			console.log("you selected both artist and album!");
			songs.allSongs(filterSongs.filterByBoth);
		}

		if (selectedArtist === "Artists" && selectedAlbum === "Albums") {
			alert("I don't know what to filter!");
		}

		if (selectedArtist !== "Artists" && selectedAlbum === "Albums") {
			console.log("you selected an artist but not an album!");
			songs.allSongs(filterSongs.filterByArtist);
		}

		if (selectedArtist === "Artists" && selectedAlbum !== "Albums") {
			console.log("you selected an album but not an artist!");
			songs.allSongs(filterSongs.filterByAlbum);
		}



		// switch(selectedArtist && selectedAlbum) {
		// 	case (selectedArtist === "Artists" && selectedAlbum === "Albums"):
		// 		alert("I don't know what to filter!");
		// 	break;

	});

		// songs.allSongs(filterSongs.filterByArtist);
		// songs.allSongs(filterSongs.filterByAlbum);
		// songs.allSongs(filterSongs.filterByBoth);

});


