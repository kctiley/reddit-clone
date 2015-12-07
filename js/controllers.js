
app.controller('myController', function($scope) {
  $scope.greeting = "myController";

  $scope.showForm = function(){
    if($scope.displayForm !== true ){
      $scope.displayForm = true;
    }
    else $scope.displayForm = false;
  }

  $scope.predicate = 'numberOfVotes';
  $scope.reverse = true;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

  $scope.posts = [
    {
      title: "50 Shades",
      postDate: "Sat Dec 01 2015 12:23:04",
      author: "Earnest Hemmingway",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ace_motorcycle_1922.JPG",
      description: "This is a Ace_motorcycle_1922,Fap vegan normcore keffiyeh street art slow-carb. Synth microdosing slow-carb bushwick, godard flannel ethical sartorial disrupt umami sustainable gentrify banh mi. Tumblr post-ironic polaroid pickled. Polaroid cliche lomo, kitsch tofu art party chartreuse post-ironic XOXO flannel kogi next level banh mi before they sold out mustache.",
      comments: [{author: "Klint", text: "Eat my shorts!"}],
      numberOfVotes: 1,
    },
    {
      title: "Cat in the Hat",
      postDate: "Sat Dec 03 2015 12:23:04",
      author: "Dr. Zuess",
      imageURL: "http://www.childsplayaz.org/sysimg/large-Cat-Fish-JugglingonBall-WEB.jpg",
      description: "Catt cat kat,Fap vegan normcore keffiyeh street art slow-carb. Synth microdosing slow-carb bushwick, godard flannel ethical sartorial disrupt umami sustainable gentrify banh mi. Tumblr post-ironic polaroid pickled. Polaroid cliche lomo, kitsch tofu art party chartreuse post-ironic XOXO flannel kogi next level banh mi before they cat",
      comments: [{author: "Dan Shaffer", text: "Where are my car keys??"}],
      numberOfVotes: 4,
    },   

  ];


  $scope.submit = function(comments){
    $scope.displayForm = false;
    $scope.post = {
      showComments: false,
      showCommentForm: false,
      postDate: new Date(),
      title: $scope.title,
      author: $scope.author,
      imageURL: $scope.imageURL,
      description: $scope.description,
      comments: [],
      numberOfVotes: 0,
    }
    $scope.posts.push($scope.post);
    $scope.post = {};
  }

  $scope.upVote = function(post){
    this.numberOfVotes = post.numberOfVotes++;
  }


  $scope.downVote = function(post){
    this.numberOfVotes = post.numberOfVotes--;
  }

 
  $scope.showAddComment = function(post){
    if(this.showCommentForm !== true ){
      $scope.displayAddComment = true;
    }
    else $scope.displayAddComment = false;
  }

  $scope.addComment = function(post){
    post.comments.push({
      author: this.commentUserName,
      text: this.commentText,
    });
    console.log(post.comments);

    $scope.displayAddComment = false;
  }

  $scope.showAllPostComments = function(post){
    if($scope.showComments !== true){
      $scope.showComments = true;
      this.comments = post.comments;
      console.log("showAllPostComments post.comments... ", post.comments)
    }
    else $scope.showComments = false;
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

