var app = angular.module("populateSongs", ['ngRoute']);

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
      .otherwise('/songs/list');
  }]);