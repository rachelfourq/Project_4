var app = angular.module('TravelApp', ['TravelServices', 'TravelCtrls', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/travels.html',
    controller: 'TravelCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  // .when('/show', {
  //   templateUrl: 'app/views/show.html',
  //   controller: 'ShowCtrl'
  // })
  .when('/duration', {
    templateUrl: 'app/views/duration.html',
    controller: 'TravelCtrl'
  })
  .when('/itenerary', {
    templateUrl: 'app/views/itenerary.html',
    controller: 'IteneraryCtrl'
  })
  // .when('/:id', {
  //   templateUrl: 'app/views/:id.html'
  // })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);