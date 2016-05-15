app.controller("populateMySongs", ["$q", "$http", "$scope", "$firebaseArray", function($q, $http, $scope, $firebaseArray) {

var songListRef = new Firebase("https://blazing-torch-8825.firebaseio.com/songList");

$scope.artist = "";

$scope.songs = $firebaseArray(songListRef);

$scope.songs.$loaded().then(function(data) {
	console.log("data", data);
})

// getMySongs.loadSongs().then(function() {
//   $scope.songs = getMySongs.getSongs();
// }, function(error) {
//   console.log("Failed", error);
// })  



}]);