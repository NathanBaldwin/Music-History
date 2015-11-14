
define(["jquery", "songs", "moreSongs", "populateDom", "addSongFirebase", "filterSongs", "firebase"],
	function($, songs, moreSongs, populateDom, addSong, filterSongs, firebase) {

	//populate first songs from firebase on page load:

	songs.firstSongs(populateDom.populateMain);

	//Establish constant connection to Firebase data,
	//and update DOM automatically when a value is altered in firebase:

	var myFirebaseRef = new Firebase("https://blazing-torch-8825.firebaseio.com");
	console.log("myFirebaseRef", myFirebaseRef);

	myFirebaseRef.on("value", function(snapshot) {
		var allSongsObject = snapshot.val();
		console.log("allSongsObject", allSongsObject);
		populateDom.populateMain(allSongsObject);
	});


	//Delete button functionality:

	$("body").on("click", ".delete", function() {
		console.log("unique song ID", this.id);
		var uniqueSongID = this.id;

		addSong.deleteSong(uniqueSongID)
		.then(function(deleteInfo) {
			console.log("delete promise resolved! Heres your delete info: ", 
				deleteInfo);
		});
	});

	//Filter button functionality:

	var filter = $("#filter");

	filter.click(function() {
		console.log("you clicked filter!");

		var selectedArtist = $("#selected-artist").val();
		console.log("selectedArtist", selectedArtist);
		var selectedAlbum = $("#selected-album").val();
		console.log("selectedAlbum", selectedAlbum);

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

	});


// ***********  Add Music Page: ***********************

	var addMusicButton = $("#add-music-button");
	var listMusicPage = $("#list-music-page");
	var addMusicPage = $("#add-music");
	var listMusicButton = $("#list-music");
	var addButton = $("#add-button");
	var sideBar = $("#sideBar");

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

	//"Add Song" Button posts new song to firebase
	// and updates Dom with new song:

	var songNameInput = $("#song-name");
	var artistNameInput = $("#artist");
	var albumNameInput = $("#album");

	addButton.click(function() {
		$("#added-music-modal").modal("show");
		// addSong.addSong()
		// .then(function(newSong) {
		// 	console.log("new song sent to DOM", newSong);
		// });

		// listMusicPage.show();
		// addMusicPage.hide();
		// $("body").removeClass("hard-left");
	});

});


