app.controller("populateMySongs", ["$q", "$http", "$scope", "getMySongs",  function($q, $http, $scope, getMySongs) {
	

getMySongs.loadSongs().then(function() {
  $scope.songs = getMySongs.getSongs();
}, function(error) {
  console.log("Failed", error);
})  

// getSongs().then(function (songs) {
//     console.log("songs", songs);
//     //console.log("pre-concat allSongsArray", $scope.allSongsArray);
//     getMoreSongs().then(function (moreSongsObject) {
//       console.log("moreSongsObject", moreSongsObject);
//       // $scope.allSongsArray = songs.concat(moreSongsObject);
//       // console.log("allSongsArray", $scope.allSongsArray);
//     })
//   }, function (error) {
//     console.log("Failed");
//   });


}]);