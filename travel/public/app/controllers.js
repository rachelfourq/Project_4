angular.module('TravelCtrls', ['TravelServices'])

.controller('TravelCtrl', [
	'$scope', 
	'$location',
	'Travel', 
	function($scope, $location, Travel){
		$scope.manufacturer = null;
		$scope.model = null;
		$scope.engines = null;
		$scope.image = null;
		$scope.newTrip = function() {
			var postTrip = {
				manufacturer: $scope.manufacturer,
				model: $scope.model,
				engines: $scope.engines,
				image: $scope.image
			};
			var newDestination = new Airplane(postTrip);
			newDestination.$save();
			$location.path('/show')
		}
	}
]).controller('ShowCtrl', ['$scope', 'Travel', function($scope, Travel) {
		$scope.travels = [];
	Travel.query(function success(data) {
    	$scope.travels = data;
    	$scope.showTrips = data;
  	})
}])	