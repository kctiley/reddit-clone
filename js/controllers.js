
app.controller('myController', function($scope) {
  $scope.greeting = "myController";

  $scope.showForm = function(){
    if($scope.displayForm !== true ){
      $scope.displayForm = true;
    }
    else $scope.displayForm = false;
  }

  $scope.posts = [
    {
      title: "50 Shades",
      postDate: new Date(),
      author: "Earnest Hemmingway",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ace_motorcycle_1922.JPG",
      description: "This is a Ace_motorcycle_1922,Fap vegan normcore keffiyeh street art slow-carb. Synth microdosing slow-carb bushwick, godard flannel ethical sartorial disrupt umami sustainable gentrify banh mi. Tumblr post-ironic polaroid pickled. Polaroid cliche lomo, kitsch tofu art party chartreuse post-ironic XOXO flannel kogi next level banh mi before they sold out mustache.",
      comments: [],
      numberOfVotes: 3,
    },
    {
      title: "Cat in the Hat",
      postDate: new Date(),
      author: "Dr. Zuess",
      imageURL: "http://www.childsplayaz.org/sysimg/large-Cat-Fish-JugglingonBall-WEB.jpg",
      description: "Catt cat kat,Fap vegan normcore keffiyeh street art slow-carb. Synth microdosing slow-carb bushwick, godard flannel ethical sartorial disrupt umami sustainable gentrify banh mi. Tumblr post-ironic polaroid pickled. Polaroid cliche lomo, kitsch tofu art party chartreuse post-ironic XOXO flannel kogi next level banh mi before they cat",
      comments: [],
      numberOfVotes: 1,
    },   




  ];
  $scope.comments = [];


  $scope.submit = function(comments){
    idAcumulator++;
    $scope.form = false;
    $scope.post = {
      commentsShow: false,
      commentForm: false,
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

  // $scope.showPosts = function(){
  //   if($scope.showPosts.length > 0){
  //     $scope.displayPosts = true;
  //   }
  // }

  $scope.upVote = function(post){
    this.numberOfVotes = post.numberOfVotes++;
  }


  $scope.downVote = function(post){
    this.numberOfVotes = post.numberOfVotes--;
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

