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
  .when('/duration', {
    templateUrl: 'app/views/duration.html',
    controller: 'TravelCtrl'
  })
  .when('/itinerary', {
    templateUrl: 'app/views/itinerary.html',
    controller: 'ItineraryCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });
  $locationProvider.html5Mode(true);
}]);