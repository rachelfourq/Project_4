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

.controller('TravelCtrl', ['$scope', '$location', 'Travel', 'Activities', 'FilteredCity', function($scope, $location, Travel, Activities, FilteredCity) {    
    $scope.city = FilteredCity.city;
    $scope.filteredCity = FilteredCity.filteredCity;
    $scope.saveDestination = FilteredCity.saveDestination;
    console.log(myCity)

    //duration
    $scope.duration = FilteredCity.duration;
    $scope.filteredDuration = FilteredCity.filteredDuration;
    $scope.saveDuration = FilteredCity.saveDuration;

}])

.controller('ItineraryCtrl', ['$scope', '$location', 'Travel', 'Activities', 'FilteredCity', function($scope, $location, Travel, Activities, FilteredCity) {
    $scope.travels = [];
    Travel.query(function success(data) {
        console.log(data);
        $scope.travels = data;
        // $scope.showTrips = data;
    }, function error(data) {
        console.log(data);

    });
    $scope.activities = [];
    Activities.query(function success(data) {
        console.log(data);
        $scope.activities = data;
        // $scope.showTrips = data;
    }, function error(data) {
        console.log(data);

    });

    $scope.myCity = myCity;
    $scope.myDuration = myDuration;
    console.log("yes?" + $scope.myCity)
    //     $scope.duration = FilteredCity.duration;
    // duration.get(function success(data) {
    //     console.log(data)
    //     $scope.showTrips = data;
    // })
    //     $scope.city = FilteredCity.city;
    // city.get(function success(data) {
    //     console.log(data)
    //     $scope.showTrips = data;
    // })

}])

