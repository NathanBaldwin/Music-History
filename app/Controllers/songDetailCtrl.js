app.controller("songDetailCtrl", ["$scope", "$routeParams", "$firebaseArray", 
	function($scope, $routeParams, $firebaseArray) {

	$scope.selectedSong = {};

	var songListRef = new Firebase("https://blazing-torch-8825.firebaseio.com/songList");

	$scope.songs = $firebaseArray(songListRef);

	$scope.songId = $routeParams.songId;

	$scope.songs.$loaded().then(
		function(songList) {
			console.log("songList", songList);
			$scope.selectedSong = $scope.songs.$getRecord($scope.songId);
		})

	
}])