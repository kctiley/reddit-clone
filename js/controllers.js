
app.controller('myController', function($scope) {
  $scope.greeting = "myController";
});

app.controller('HomeController', function($scope) {
  $scope.homeMessage = "Home!";
});


// app.controller('ServiceController', function($scope, $http) {
//   console.log('test1')
//   $http.get('https://api.github.com/zen').then(function(data){
//     console.log('test2')
//     $scope.zenData = data;
//   });
// });

