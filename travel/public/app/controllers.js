angular.module('TravelCtrls', ['TravelServices']).controller('TravelCtrl', ['$scope', 'Travel', 'Activities', function($scope, Travel, Activities) {
    $scope.travels = [];
    Travel.query(function success(data) {
        console.log(data);
        $scope.travels = data;
    }, function error(data) {
        console.log(data);
    });
    $scope.activities = [];
    Activities.query(function success(data) {
        console.log(data);
        $scope.activities = data;
    }, function error(data) {
        console.log(data);
    });
}])
.controller('ShowCtrl', ['$scope', 'Travel', function($scope, Travel) {
		$scope.travels = [];
	Travel.query(function success(data) {
		console.log(data)
    	$scope.travels = data;
    	$scope.showTrips = data;
  	})
}])	

.controller('ShowCtrl', ['$scope', 'Activities', function($scope, Activities) {
		$scope.activities = [];
	Activities.query(function success(data) {
		console.log(data)
    	$scope.activities = data;
    	$scope.showTrips = data;
  	})
}])	

.controller('IteneraryCtrl', ['$scope', 'Travel', 'Activities', function($scope, Travel, Activities) {
    Travel.findOne({ filter: { where: { duration: 4 } } });
    $scope.showItenerary = data;
}])

.controller('DurCtrl', ['$scope', function($scope) { 
    $scope.duration;
    $scope.saveDuration = function() {
        console.log($scope.duration)  
    }
}])




