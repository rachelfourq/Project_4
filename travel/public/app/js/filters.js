// angular.module('tripFilters', []).filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });

// filter('onlyBooleanValueFilter', [function(){
//     return function(input, param){
//         var ret = [];
//         if(!angular.isDefined(param)) param = true;
//         angular.forEach(input, function(v){
//             if(angular.isDefined(v.active) && v.active === param){
//                 ret.push(v);
//             }
//         });
//         return ret;
//     };
// }])

// app.filter('tripFilters', function() {
//   return function(destination, duration) {
//     if (!search) {
//       return items;
//     }

//     var tripType = search.carType;
//     if (!carType || '' === carType) {
//       return items;
//     }

//     return items.filter(function(element, index, array) {
//       return element.carType.name === search.carType;
//     });

//   };
// });


//maybe??
app.filter('tripFilters', function() {

  // Create the return function
  // set the required parameter name to **number**
  return function(destination, duration) {

    // Ensure that the passed in data is a number
    if(destination === myCity && duration =< myDuration) {

      // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
      return ;

    }




app.filter('tripFilters', function() {

  // Create the return function and set the required parameter name to **input**
  return function(data) {

    var out = [];

    // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
    angular.forEach(data, function(duration, destination) {

      if (destination === myCity && duration <= myDuration) {
        out.push(data)
      }
      
    })

    return out;
  }

});


