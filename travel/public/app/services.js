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
        image: 'https://www.flickr.com/photos/136950467@N03/23802000085/in/dateposted-public/'
    },
    {
        name: 'Austin',
        image: 'https://www.flickr.com/photos/136950467@N03/23173868744/in/dateposted-public/'
    },
    {
        name: 'New Orleans',
        image: 'https://www.flickr.com/photos/136950467@N03/23775913846/in/dateposted-public/'
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
