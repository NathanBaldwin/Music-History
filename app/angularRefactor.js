var app = angular.module("populateSongs", ['ngRoute', 'firebase', 'angular.filter']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/songList.html',
        controller: 'populateMySongs'
      })
      .when('/songs/addSong', {
        templateUrl: 'partials/addSong.html',
        controller: 'addSong'
      })
      .when('/songs/:songId', {
        templateUrl: 'partials/songDetail.html',
        controller: 'songDetailCtrl'
      })
      .when("/songs/details/:otherVariable", {
        templateUrl: 'partials/songDetail.html',
        controller: 'songDetailCtrl'
      })
      .otherwise('/songs/list');
  }]);