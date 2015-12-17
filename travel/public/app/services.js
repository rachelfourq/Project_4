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
        image: 'http://i392.photobucket.com/albums/pp8/RachelFourq/IMG_3496_zps4xrrmved.jpg'
    },
    {
        name: 'Austin',
        image: 'http://i392.photobucket.com/albums/pp8/RachelFourq/IMG_3489_zps6neo4yxd.jpg'
    },
    {
        name: 'New Orleans',
        image: 'http://i392.photobucket.com/albums/pp8/RachelFourq/IMG_3494_zpsm8t5tkgg.jpg'
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
