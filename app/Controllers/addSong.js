app.controller("addSong", ["$q", "$http", "$scope", "$firebaseArray", function($q, $http, $scope, $firebaseArray) {
	console.log("loaded add song module!");
  
  var songListRef = new Firebase("https://blazing-torch-8825.firebaseio.com/songList");

  $scope.songs = $firebaseArray(songListRef);

  $scope.newSong = {};

  $scope.addSong = function() {
    $scope.songs.$add($scope.newSong);

  }


}]);