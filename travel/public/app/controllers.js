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
// .controller('ShowCtrl', ['$scope', 'Travel', function($scope, Travel) {
// }])	

// .controller('ShowCtrl', ['$scope', 'Activities', function($scope, Activities) {
// }])

.controller('IteneraryCtrl', ['$scope', 'Travel', 'Activities', function($scope, Travel, Activities) {
    // Travel.findOne({ filter: { where: { duration: 4 } && {destination: 'Seattle'}} });
    // $scope.showItenerary = data;

        $scope.travels = [];
    Travel.query(function success(data) {
        console.log(data)
        $scope.travels = data;
        $scope.showTrips = data;
    })
        $scope.activities = [];
    Activities.query(function success(data) {
        console.log(data)
        $scope.activities = data;
        $scope.showTrips = data;
    })
}])

// .controller('DurCtrl', ['$scope', function($scope) { 

// }])

.controller('TravelCtrl', ['$scope', 'Travel', 'Activities', function($scope, Travel, Activities) {
    console.log('yaaa')
    $scope.destination;
    $scope.city = [{
        name: 'Seattle',
        image: ""
    },
    {
        name: 'Austin',
        image: ''
    },
    {
        name: 'New Orleans',
        image: ''
    }];
    
    $scope.saveDestination = function(city) {
        console.log(city)  
    }

    $scope.duration;
    $scope.saveDuration = function() {
        console.log($scope.duration)  
    }
}])



