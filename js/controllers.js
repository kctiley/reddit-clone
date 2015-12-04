
app.controller('myController', function($scope) {
  $scope.greeting = "myController";
  $scope.showForm = function(){
    if($scope.displayForm !== true ){
      $scope.displayForm = true;
    }
    else $scope.displayForm = false;
  }

  $scope.posts = [];
  $scope.comments = [];


  $scope.submit = function(comments){
    $scope.form = false;
    $scope.post = {
      commentsShow: false,
      commentForm: false,
      postDate: new Date(),
      title: $scope.title,
      author: $scope.author,
      imageURL: $scope.imageURL,
      description: $scope.description,
      comments: []
    }
    $scope.posts.push($scope.post);
    $scope.post = {};
  }

  $scope.showPosts = function(){
    if($scope.showPosts.length > 0){
      $scope.displayPosts = true;
    }
  }



});

// app.controller('HomeController', function($scope) {
//   $scope.homeMessage = "Home!";
// });


// app.controller('ServiceController', function($scope, $http) {
//   console.log('test1')
//   $http.get('https://api.github.com/zen').then(function(data){
//     console.log('test2')
//     $scope.zenData = data;
//   });
// });

