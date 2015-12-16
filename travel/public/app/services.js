angular.module('TravelServices', ['ngResource'])
.factory('Travel', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/travels/:id');
}])
.factory('Activities', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/activities/:id');
}])
.factory('FilteredCity', ['$resource', function($resource) {
    var filteredCity = '';
    var filteredDuration = '';

	var city = [{
        name: 'Seattle',
        image: "./img/seattle.jpeg"
    },
    {
        name: 'Austin',
        image: ''
    },
    {
        name: 'New Orleans',
        image: ''
    }];

    var duration = [{
    	value: 1
    }, 
    {
    	value: 2
    },
    {
    	value: 3
    },
    {
    	value: 4
    },
    {
    	value: 5
    }];
    
	return {
		filteredCity: filteredCity,
		city: city,
		duration: duration,
		filteredDuration: filteredDuration,
		saveDuration: function(duration) {
			filteredDuration = duration;
			console.log(filteredCity)
			console.log('filter: ', filteredDuration)
			myDuration = filteredDuration;
		},
	   	saveDestination: function(city) {
	      	filteredCity = city
	        console.log('filter: ', filteredCity);
	        myCity = filteredCity;
	        console.log('mycity', myCity)
	    }
	}
}])
