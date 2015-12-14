angular.module('TravelServices', ['ngResource'])
.factory('Travel', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/travels/:id');
}]);