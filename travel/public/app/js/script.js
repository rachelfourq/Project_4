// $(document).ready(function() {

// 	console.log('working')

	$('#durationForm').on('submit', function(e){
	 e.preventDefault();
	 console.log('testing')
	 console.log('test', $('input[name="duration"]:checked').val());
	});



// $(document).ready(function(){
//   $('.parallax').parallax();
// });

//custom directive
var myApp = angular.module('myApp',[]);

myApp.directive('myDirective', function () {
    return function (scope, element, attr) {
        element.val("value = "+ scope.$eval(attr.value));
    }
});

// function MyCtrl($scope) {

// }​


