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
    // $scope.city = []
    //destination
    
    $scope.city = FilteredCity.city;
    $scope.filteredCity = FilteredCity.filteredCity;
    $scope.saveDestination = FilteredCity.saveDestination;
    // var myCity = FilteredCity.filteredCity
    // console.log(FilteredCity.city)
    console.log(myCity)

    //duration
    $scope.duration = FilteredCity.duration;
    $scope.filteredDuration = FilteredCity.filteredDuration;
    $scope.saveDuration = FilteredCity.saveDuration;
    // Travel.query(function success(data) {
    //     $scope.city = data;
    //     console.log(data)
    // }, function error(data){
    //     console.log(data)
    // })

    // $scope.showTrips = [];

    // $scope.destination;
    // $scope.city = [{
    //     name: 'Seattle',
    //     image: "./img/seattle.jpeg"
    // },
    // {
    //     name: 'Austin',
    //     image: ''
    // },
    // {
    //     name: 'New Orleans',
    //     image: ''
    // }];
    
    // $scope.saveDestination = function(city) {
    //     $scope.filteredCity = city
    //     console.log('filter: ', $scope.filteredCity)  
    // }

}])
// .controller('DurCtrl', ['$scope', '$location', 'Travel', 'Activities', function($scope, $location, Travel, Activities) {
    // $scope.saveDuration = function() {
    //     console.log($scope.duration)  
    //     $location.url('/itenerary')
    // }


// }])
.controller('ItineraryCtrl', ['$scope', '$location', 'Travel', 'Activities', 'FilteredCity', function($scope, $location, Travel, Activities, FilteredCity) {
    // not working:
    // Travel.findOne({ filter: { where: { duration: 4 } && {destination: 'Seattle'}} });
    // $scope.showItenerary = data;
    $scope.travels = [];
    Travel.query(function success(data) {
        console.log(data);
        $scope.travels = data;
        $scope.showTrips = data;
    }, function error(data) {
        console.log(data);

    });
    $scope.activities = [];
    Activities.query(function success(data) {
        console.log(data);
        $scope.activities = data;
        $scope.showTrips = data;
    }, function error(data) {
        console.log(data);

    });

    $scope.myCity = myCity;
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

