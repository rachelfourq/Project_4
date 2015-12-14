angular.module('TravelCtrls', ['TravelServices']).controller('TravelCtrl', ['$scope', 'Travel', function($scope, Travel) {
    $scope.travels = [];
    Travel.query(function success(data) {
        console.log(data);
        $scope.travels = data;
    }, function error(data) {
        console.log(data);
    });
}]).
controller('ShowCtrl', ['$scope', 'Travel', function($scope, Travel) {
		$scope.travels = [];
	Travel.query(function success(data) {
    	$scope.travels = data;
    	$scope.showTrips = data;
  	})
}])	
