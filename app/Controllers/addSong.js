app.controller("addSong", ["$q", "$http", "$scope", "getMySongs",  function($q, $http, $scope, getMySongs) {
	console.log("loaded add song module!");
  
  $scope.newSong = {};

  $scope.addSong = function() {
    getMySongs.addSong($scope.newSong);
  };


}]);