var app = angular.module('redditClone', ['ngRoute','angularMoment'])

  app.config(function($routeProvider,$locationProvider,$httpProvider){
      
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.common = 'Content-Type: application/json';
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

     $routeProvider
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      // .when('/service', {
      //   templateUrl: 'partials/service.html',
      //   controller: 'ServiceController'
      // })
      // .when('/tunes', {
      //   templateUrl: 'partials/tunes.html',
      //   controller: 'TunesController'
      // })

    $locationProvider.html5Mode(true);
  })