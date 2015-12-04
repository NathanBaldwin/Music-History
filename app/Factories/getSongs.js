app.factory("getMySongs",["$q", "$http", function($q, $http) {

	

var songsList = [];
var moreSongsList = [];

	function getSongs() { 
		return $q(function(resolve, reject) {
      $http.get('./data/songs.json')
      .success(
        function(objectFromJSONFile) {
        	console.log("objectFromJSONFile.songList", objectFromJSONFile.songList);
        	songList = objectFromJSONFile.songList;
          resolve(objectFromJSONFile.songList);
        }, function(error) {
          reject(error);
        }
      );
    });
	};

  function getMoreSongs() { 
  	return $q(function(resolve, reject) {
      $http.get('./data/moreSongs.json')
      .success(
        function(objectFromJSONFile) {
          console.log("objectFromJSONFile", objectFromJSONFile);
          resolve(objectFromJSONFile.songList);
        }, function(error) {
          reject(error);
        }
      );
    });
	};

	var firstSongsPromise = getSongs();
	var moreSongsPromise = getMoreSongs();
  
  return {
  	loadSongs: function() {
  		return firstSongsPromise;
  	},
  	getSongs: function() {
  		return songList;
  	},
  	addSong: function(newSong) {
  		songList.push(newSong);
  	}

  }

}])